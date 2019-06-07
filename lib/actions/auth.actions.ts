import axios from 'axios';
import { API_PREFIX } from 'lib/constants';
import Router from 'next/router';
import { Response, ErrResponse } from 'lib/types';

export const signInUser = () => {
  return (dispatch: any) => {
    axios.post(`${API_PREFIX}/users`)
    .then((response: Response) => {
      dispatch(Router.push('/'));
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

export const signUpUser = () => {
  return (dispatch: any) => {
    axios.post(`${API_PREFIX}/users`)
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