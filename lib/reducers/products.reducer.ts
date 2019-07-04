import initialState from "lib/initialState";
import {
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_LOADING,
  GET_ALL_PRODUCTS_ERROR,
  ADD_FEATURED_PRODUCTS,
  NUMBER_OF_FEATURED_PRODUCTS,
  SET_CART_ID,
  ADD_TO_CART_LOADING,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_ERROR,
  CART_TOTAL_SUCCESS,
  REMOVE_ITEM_SUCCESS,
  SET_CURRENT_PRODUCT_ITEM,
  SET_CURRENT_PRODUCT_ITEM_LOADING,
  SET_SAVED_ITEMS_SUCCESS,
  ADD_PRODUCT_ATTRIBUTES,
  ADD_PRODUCT_REVIEWS,
  GET_ORDERS_SUCCESSFUL,
  GET_SHIPPING_REGION,
  PAYMENT_WAS_SUCCESSFUL,
  GET_ORDER_ID
} from "lib/constants";

export default (state = initialState.products, action: any) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_SUCCESS:
      return { ...state, loading: false, allProducts: action.data };
    case GET_ALL_PRODUCTS_LOADING:
      return { ...state, loading: true };
    case GET_ALL_PRODUCTS_ERROR:
      return { ...state, loading: false, error: action.data };
    case ADD_FEATURED_PRODUCTS:
      const allFeaturedProducts = [
        ...state.allProducts.rows.slice(0, NUMBER_OF_FEATURED_PRODUCTS)
      ];
      return { ...state, featuredProducts: allFeaturedProducts };
    case SET_CART_ID:
      return { ...state, cart: { ...state.cart, cartId: action.data } };
    case ADD_TO_CART_SUCCESS:
      state.cart = {
        ...state.cart,
        items: [...action.data],
        loading: false
      };
      return { ...state };
    case ADD_TO_CART_LOADING:
      return { ...state, cart: { ...state.cart, loading: true } };
    case ADD_TO_CART_ERROR:
      return {
        ...state,
        cart: { ...state.cart, loading: false, cartError: action.data }
      };
    case REMOVE_ITEM_SUCCESS:
      state.cart = {
        ...state.cart,
        items: state.cart.items.filter(
          (item: any) => item.item_id !== action.data
        ),
        loading: false
      };
      return { ...state };
    case CART_TOTAL_SUCCESS:
      return { ...state, cart: { ...state.cart, totalAmount: action.data } };
    case SET_CURRENT_PRODUCT_ITEM:
      return {
        ...state,
        loading: false,
        currentProductItem: { ...state.currentProductItem, ...action.data }
      };
    case SET_CURRENT_PRODUCT_ITEM_LOADING:
      return { ...state, loading: true };
    case SET_SAVED_ITEMS_SUCCESS:
      return { ...state, savedItems: action.data };
    case ADD_PRODUCT_ATTRIBUTES:
      return {
        ...state,
        currentProductItem: {
          ...state.currentProductItem,
          attributes: action.data
        }
      };
    case ADD_PRODUCT_REVIEWS:
      return {
        ...state,
        currentProductItem: {
          ...state.currentProductItem,
          reviews: action.data
        }
      };
    case GET_ORDERS_SUCCESSFUL:
      return { ...state, orders: action.data };
    case GET_SHIPPING_REGION:
      return { ...state, shippingRegions: action.data };
    case GET_ORDER_ID:
      return { ...state, ...action.data };
    case PAYMENT_WAS_SUCCESSFUL:
        state.cart = {
          ...state.cart,
          totalAmount: '00.00',
          items: [],
          loading: false
        };
      return { ...state };
    default:
      return state;
  }
};
