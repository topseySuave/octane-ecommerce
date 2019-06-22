import axios from 'axios';
import { API_PREFIX,
  GET_ALL_PRODUCTS_LOADING, GET_ALL_PRODUCTS_ERROR,
  GET_ALL_PRODUCTS_SUCCESS, ADD_FEATURED_PRODUCTS,
  ADD_TO_CART_ERROR, SET_CART_ID, ADD_TO_CART_SUCCESS, ADD_TO_CART_LOADING, CART_TOTAL_SUCCESS, CART_TOTAL_ERROR, REMOVE_ITEM_SUCCESS, REMOVE_ITEM_ERROR
} from 'lib/constants';
import { Response, ErrResponse, ICategoryValues, IDepartmentValues } from 'lib/types';
import { Dispatch } from 'redux';
import { IProduct } from 'lib/types';
import { openNotificationWithIcon } from 'lib/utils';
import { isEmpty } from 'lodash';

export const getAllProducts = (withFeatured = true) => {
  return (dispatch: any) => {
    dispatch({ type: GET_ALL_PRODUCTS_LOADING });
    axios.get(`${API_PREFIX}/products`)
    .then(({ data }: Response) => {
      dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, data });
      withFeatured && dispatch({ type: ADD_FEATURED_PRODUCTS });
    })
    .catch((err: ErrResponse) => {
      dispatch({ type: GET_ALL_PRODUCTS_ERROR, data: err });
    });
  };
};

export const getProductWithAppAttr = (appAttr: any) => {
  const attr = typeof appAttr.category_id !== 'undefined' ? 'inCategory' : 'inDepartment';
  return (dispatch: any) => {
    dispatch({ type: GET_ALL_PRODUCTS_LOADING });
    axios.get(`${API_PREFIX}/products/${attr || 'inDepartment'}/${appAttr.category_id || appAttr.department_id}`)
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
        dispatch({ type: REMOVE_ITEM_SUCCESS, data: productData });
        return openNotificationWithIcon('success', 'Removed an item from the cart');
      }
    })
    .catch((err) => {
      console.log('err ===> ', err);
      dispatch({ type: REMOVE_ITEM_ERROR, data: err });
      openNotificationWithIcon('error', 'An Error occurred');
    });
  };
};
