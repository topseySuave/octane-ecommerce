import axios from 'axios';
import { API_PREFIX, ADD_USER_SUCCESS, ADD_USER_LOADING, ADD_USER_ERROR, ADD_EXISTING_USER } from 'lib/constants';
import { ErrResponse } from 'lib/types';
import { Dispatch } from 'react';
import { openNotificationWithIcon, getUserData } from 'lib/utils';

export const signInUser = (userData: any) => {
  const user = { email: userData.email, password: userData.password };
  return (dispatch: Dispatch<{}>) => {
    dispatch({ type: ADD_USER_LOADING });
    axios.post(`${API_PREFIX}/customers/login`, user)
    .then(({ data }: any) => {
      if(data.error) {
        dispatch({ type: ADD_USER_ERROR, data: data });
        return openNotificationWithIcon('warning', 'User Does not exists');
      } else {
        dispatch({ type: ADD_USER_SUCCESS, data });
        if(userData.remember) localStorage.setItem('me', JSON.stringify(data));
      }
    })
    .catch((err: ErrResponse) => {
      console.log('Error: ', err);
      dispatch({ type: ADD_USER_ERROR, data: err });
      return openNotificationWithIcon('error', 'User Does not exists');
    });
  };
};

export const signUpUser = (userData: any) => {
  const user = { email: userData.email, name: userData.name, password: userData.password };
  return (dispatch: Dispatch<{}>) => {
    dispatch({ type: ADD_USER_LOADING });
    axios.post(`${API_PREFIX}/customers`, user)
    .then(({ data }: any) => {
      if(data.error) {
        dispatch({ type: ADD_USER_ERROR, data: data });
        return openNotificationWithIcon('warning', 'User already exists');
      } else {
        dispatch({ type: ADD_USER_SUCCESS, data });
        if(userData.remember) localStorage.setItem('me', JSON.stringify(data));
      }
    })
    .catch((err: any) => {
      console.log('Error: ', err);
      dispatch({ type: ADD_USER_ERROR, data: err });
      return openNotificationWithIcon('error', 'User already exists');
    });
  };
};

export const addSignedInUser = () => {
  return (dispatch: Dispatch<{}>) => {
    if (getUserData().accessToken) {
      dispatch({ type: ADD_EXISTING_USER, data: getUserData() });
    }
  };
};

export const updateUserData = (value: any, token: string) => {
  return (dispatch: Dispatch<{}>) => {
    console.log('values ===> ', value);
    axios.put(`${API_PREFIX}/customer?token=${token.split(' ')[1]}`, value)
    .then(({ data }: any) => {
      console.log(data);
    })
    /**
     * there is an error with this endpoint where it tells that "Access Unauthorized"
     */
    .catch((err) => {
      console.log(err);
      return openNotificationWithIcon('error', 'Access Unauthorized', 'We are getting an access UnAuthorized and would require a fix from turing');
    });
  };
};
