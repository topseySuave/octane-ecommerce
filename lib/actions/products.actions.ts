import axios from 'axios';
import { API_PREFIX,
  GET_ALL_PRODUCTS_LOADING, GET_ALL_PRODUCTS_ERROR,
  GET_ALL_PRODUCTS_SUCCESS, ADD_FEATURED_PRODUCTS, ADD_PRODUCT_REVIEWS,
  ADD_TO_CART_ERROR, SET_CART_ID, ADD_TO_CART_SUCCESS, ADD_TO_CART_LOADING, CART_TOTAL_SUCCESS, CART_TOTAL_ERROR, REMOVE_ITEM_SUCCESS, REMOVE_ITEM_ERROR, SET_CURRENT_PRODUCT_ITEM, SET_CURRENT_PRODUCT_ITEM_LOADING, SET_SAVED_ITEMS_SUCCESS, SET_SAVED_ITEMS_ERROR, ADD_PRODUCT_ATTRIBUTES, GET_SHIPPING_REGION
} from 'lib/constants';
import { Response, ErrResponse, ICategoryValues, IDepartmentValues } from 'lib/types';
import { Dispatch } from 'redux';
import { IProduct } from 'lib/types';
import { openNotificationWithIcon } from 'lib/utils';
import { isEmpty } from 'lodash';

export const getAllProducts = (withFeatured = true, page?: number) => {
  const api = !page ? `${API_PREFIX}/products` : `${API_PREFIX}/products?page=${page}`;
  return (dispatch: any) => {
    dispatch({ type: GET_ALL_PRODUCTS_LOADING });
    axios.get(api)
    .then(({ data }: Response) => {
      dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, data });
      withFeatured && dispatch({ type: ADD_FEATURED_PRODUCTS });
    })
    .catch((err: ErrResponse) => {
      dispatch({ type: GET_ALL_PRODUCTS_ERROR, data: err });
    });
  };
};

export const getProductWithAppAttr = (appAttr: any, page?: number) => {
  console.log('category_id ===> ', appAttr.category_id);
  const attr = typeof appAttr.category_id !== 'undefined' ? 'inCategory' : 'inDepartment';

  const api = !page ? `${API_PREFIX}/products/${attr || 'inDepartment'}/${appAttr.category_id || appAttr.department_id}` :
  `${API_PREFIX}/products/${attr || 'inDepartment'}/${appAttr.category_id || appAttr.department_id}?page=${page}`
  
  
  return (dispatch: any) => {
    dispatch({ type: GET_ALL_PRODUCTS_LOADING });
    axios.get(api)
    .then(({ data }: Response) => {
      dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, data });
    })
    .catch((err: ErrResponse) => {
      dispatch({ type: GET_ALL_PRODUCTS_ERROR, data: err });
    });
  };
};

export const getCartId = () => {
  return (dispatch: Dispatch) => {
    axios.get(`${API_PREFIX}/shoppingcart/generateUniqueId`)
    .then(({ data }: any) => {
      localStorage.setItem('cart_id', data.cart_id);
      dispatch({ type: SET_CART_ID, data: data.cart_id });
    })
    .catch((err) => {
      dispatch({ type: ADD_TO_CART_ERROR, data: err });
    });
  };
};

export const getCartItems = () => {
  return (dispatch: Dispatch) => {
    axios.get(`${API_PREFIX}/shoppingcart/${localStorage.getItem('cart_id')}`)
    .then(({ data }: any) => {
      dispatch({ type: ADD_TO_CART_SUCCESS, data });
    })
    .catch((err) => {
      dispatch({ type: ADD_TO_CART_ERROR, data: err });
    });
  };
};

export const getCartTotal = () => {
  return (dispatch: Dispatch) => {
    axios.get(`${API_PREFIX}/shoppingcart/totalAmount/${localStorage.getItem('cart_id')}`)
    .then(({ data }: any) => {
      dispatch({ type: CART_TOTAL_SUCCESS, data: data.total_amount });
    })
    .catch((err) => {
      dispatch({ type: CART_TOTAL_ERROR, data: err });
    });
  };
};

export const saveForLater = (itemId: number) => {
  return (dispatch: Dispatch) => {
    axios.get(`${API_PREFIX}/shoppingcart/saveForLater/${itemId}`)
    .then(({ data }: any) => {
      if(isEmpty(data)) {
        dispatch({ type: REMOVE_ITEM_SUCCESS, data: itemId });
        return openNotificationWithIcon('success', 'Saved for later');
      }
    })
    .catch((err) => {
      dispatch({ type: CART_TOTAL_ERROR, data: err });
    });
  };
};

export const getSavedItems = () => {
  return (dispatch: Dispatch) => {
    axios.get(`${API_PREFIX}/shoppingcart/getSaved/${localStorage.getItem('cart_id')}`)
    .then(({ data }: any) => {
      dispatch({ type: SET_SAVED_ITEMS_SUCCESS, data });
    })
    .catch((err) => {
      dispatch({ type: SET_SAVED_ITEMS_ERROR, data: err });
    });
  };
};

export const addToCart = (productData: IProduct) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ADD_TO_CART_LOADING });
    if (localStorage.getItem('cart_id')) {
      return axios.post(`${API_PREFIX}/shoppingcart/add`, {
        cart_id: localStorage.getItem('cart_id'),
        product_id: productData.product_id,
        attributes: productData.name
      })
      .then(({ data }: any) => {
        dispatch({ type: ADD_TO_CART_SUCCESS, data });
        openNotificationWithIcon('success', 'Added to Cart Successfully');
      })
      .catch((err) => {
        dispatch({ type: ADD_TO_CART_ERROR, data: err });
      });
    }
    return openNotificationWithIcon('error', 'Error adding to cart');
  };
};

export const removeFromCart = (productData: IProduct) => {
  return (dispatch: Dispatch) => {
    axios.delete(`${API_PREFIX}/shoppingcart/removeProduct/${productData.item_id}`)
    .then(({data}: any) => {
      if(isEmpty(data)) {
        dispatch({ type: REMOVE_ITEM_SUCCESS, data: productData.item_id });
        return openNotificationWithIcon('success', 'Removed an item from the cart');
      }
    })
    .catch((err) => {
      dispatch({ type: REMOVE_ITEM_ERROR, data: err });
      openNotificationWithIcon('error', 'An Error occurred');
    });
  };
};

export const getCurrentProductItem = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: SET_CURRENT_PRODUCT_ITEM_LOADING });
    axios.get(`${API_PREFIX}/products/${id}`)
    .then(({ data }: any) => {
      dispatch({ type: SET_CURRENT_PRODUCT_ITEM, data });
    });
  };
};

export const getProductAttributes = (pid: number) => {
  return (dispatch: Dispatch) => {
    axios.get(`${API_PREFIX}/attributes/inProduct/${pid}`)
    .then(({ data }) => {
      dispatch({ type: ADD_PRODUCT_ATTRIBUTES, data });
    });
  };
};

export const getProductsReviews = (pid: number) => {
  return (dispatch: Dispatch) => {
    axios.get(`${API_PREFIX}/products/${pid}/reviews`)
    .then(({ data }) => {
      dispatch({ type: ADD_PRODUCT_REVIEWS, data });
    });
  };
};

export const searchProductItem = (value: string) => {
  return (dispatch: Dispatch) => {
    axios.get(`${API_PREFIX}/products/search?query_string=${value}`)
    .then(({ data }) => {
      if (!isEmpty(data.rows)) {
        dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, data });
      }
    });
  };
};

export const getShippingRegions = () => {
  return (dispatch: any) => {
    axios.get(`${API_PREFIX}/shipping/regions`)
    .then(({ data }: any) => {
      dispatch({ type: GET_SHIPPING_REGION, data });
    });
  };
};
