import axios from 'axios';
import { API_PREFIX } from 'lib/constants';
import Router from 'next/router';
import { Response, ErrResponse } from 'lib/types';
import { Dispatch } from 'redux';

export const getAllProducts = () => {
  return (dispatch: any) => {
    axios.get(`${API_PREFIX}/products`)
    .then((response: Response) => {
      dispatch(Router.push('/signin'));
      console.log(response.data.meta.message);
    })
    .catch((err: ErrResponse) => {
      switch (err.response.status) {
        case 422:
          console.log('hello world');
        default:
        alert(err.response.data.meta.message);
          break;
      }
    });
  };
};

export const addToCart = () => {
  return (dispatch: Dispatch) => {
    console.log('heloo world');
  };
};
