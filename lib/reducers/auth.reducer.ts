import initialState from "lib/initialState";
import { ADD_USER_SUCCESS, ADD_USER_LOADING, ADD_USER_ERROR } from "lib/constants";

export default (state = initialState.auth, action: any) => {
  switch(action.type) {
    case ADD_USER_SUCCESS:
      return { ...state, loading: false, user: action.data };
    case ADD_USER_LOADING:
      return { ...state, loading: true };
    case ADD_USER_ERROR:
      return { ...state, loading: false, error: action.data };
    default:
      return { ...state };
  }
};