import axios from "axios";
import {
  API_PREFIX,
  ADD_USER_SUCCESS,
  ADD_USER_LOADING,
  ADD_USER_ERROR,
  ADD_EXISTING_USER,
  UPDATE_USER_SUCCESS
} from "lib/constants";
import { ErrResponse } from "lib/types";
import { Dispatch } from "redux";
import { openNotificationWithIcon, getUserData, headers } from "lib/utils";

export const signInUser = (userData: any) => {
  const user = { email: userData.email, password: userData.password };
  return (dispatch: Dispatch) => {
    dispatch({ type: ADD_USER_LOADING });
    axios
      .post(`${API_PREFIX}/customers/login`, user)
      .then(({ data }: any) => {
        if (data.error) {
          dispatch({ type: ADD_USER_ERROR, data: data });
          return openNotificationWithIcon("warning", "User Does not exists");
        } else {
          dispatch({ type: ADD_USER_SUCCESS, data });
          if (userData.remember)
            localStorage.setItem("me", JSON.stringify(data));
        }
      })
      .catch((err: ErrResponse) => {
        console.log("Error: ", err);
        dispatch({ type: ADD_USER_ERROR, data: err });
        return openNotificationWithIcon("error", "User Does not exists");
      });
  };
};

export const signUpUser = (userData: any) => {
  const user = {
    email: userData.email,
    name: userData.name,
    password: userData.password
  };
  return (dispatch: Dispatch) => {
    dispatch({ type: ADD_USER_LOADING });
    axios
      .post(`${API_PREFIX}/customers`, user)
      .then(({ data }: any) => {
        if (data.error) {
          dispatch({ type: ADD_USER_ERROR, data: data });
          return openNotificationWithIcon("warning", "User already exists");
        } else {
          dispatch({ type: ADD_USER_SUCCESS, data });
          if (userData.remember)
            localStorage.setItem("me", JSON.stringify(data));
        }
      })
      .catch((err: any) => {
        console.log("Error: ", err);
        dispatch({ type: ADD_USER_ERROR, data: err });
        return openNotificationWithIcon("error", "User already exists");
      });
  };
};

export const addSignedInUser = () => {
  return (dispatch: Dispatch) => {
    if (getUserData().accessToken) {
      dispatch({ type: ADD_EXISTING_USER, data: getUserData() });
    }
  };
};

export const updateUserData = (value: any) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ADD_USER_LOADING });
    axios
      .put(`${API_PREFIX}/customer`, value, { headers })
      .then(({ data }: any) => {
        dispatch({ type: UPDATE_USER_SUCCESS, data });
        return openNotificationWithIcon('success', 'Account Updated');
      })
      .catch(err => {
        console.log(err);
      });
  };
};
