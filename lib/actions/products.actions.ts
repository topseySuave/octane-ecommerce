import axios from 'axios';
import { API_PREFIX, GET_ALL_PRODUCTS_LOADING, GET_ALL_PRODUCTS_ERROR, GET_ALL_PRODUCTS_SUCCESS, ADD_FEATURED_PRODUCTS } from 'lib/constants';
import { Response, ErrResponse, ICategoryValues, IDepartmentValues } from 'lib/types';

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

export const getProductWithAppAttr = (appAttr: ICategoryValues | IDepartmentValues) => {
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

export const addToCart = () => {
  return (dispatch: Dispatch) => {
    console.log('heloo world');
  };
};
