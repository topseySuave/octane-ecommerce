import axios from 'axios';
import { API_PREFIX, GET_ALL_PRODUCTS_LOADING, GET_ALL_PRODUCTS_ERROR, GET_ALL_PRODUCTS_SUCCESS, ADD_FEATURED_PRODUCTS } from 'lib/constants';
import { Response, ErrResponse } from 'lib/types';

export const getAllProducts = (withFeatured: boolean = false) => {
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
