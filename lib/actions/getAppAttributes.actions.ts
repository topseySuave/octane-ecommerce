import axios from 'axios';
import {
  API_PREFIX, GET_DEPARTMENT_SUCCESS,
  GET_DEPARTMENT_LOADING, GET_DEPARTMENT_ERROR,
  GET_CATEGORIES_LOADING, GET_CATEGORIES_ERROR,
  GET_CATEGORIES_SUCCESS
} from 'lib/constants';
import { Response, ErrResponse } from 'lib/types';

export const getDepartments = () => {
  return (dispatch: any) => {
    dispatch({ type: GET_DEPARTMENT_LOADING });
    axios.get(`${API_PREFIX}/departments`)
    .then(({ data }: Response) => {
      dispatch({ type: GET_DEPARTMENT_SUCCESS, data });
    })
    .catch((err: ErrResponse) => {
      dispatch({ type: GET_DEPARTMENT_ERROR, err: err });
    });
  };
};

export const getCategories = () => {
  return (dispatch: any) => {
    dispatch({ type: GET_CATEGORIES_LOADING });
    axios.get(`${API_PREFIX}/categories`)
    .then(({ data }: Response) => {
      dispatch({ type: GET_CATEGORIES_SUCCESS, data });
    })
    .catch((err: ErrResponse) => {
      dispatch({ type: GET_CATEGORIES_ERROR, err: err });
    });
  };
};