import {
  GET_DEPARTMENT_SUCCESS, GET_DEPARTMENT_LOADING,
  GET_DEPARTMENT_ERROR, GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_LOADING, GET_CATEGORIES_ERROR
} from 'lib/constants';
import initialState from 'lib/initialState';

export default (state = initialState.appAttributes, action: any) => {
  switch (action.type) {
    case GET_DEPARTMENT_SUCCESS:
      state.departments = { loading: false, data: action.data};
      return {...state};
    case GET_DEPARTMENT_LOADING:
      state.departments.loading = true;
      return {...state};
    case GET_DEPARTMENT_ERROR:
      state.departments = { loading: false, data: action.data};
      return {...state};
    
    // Category state
    case GET_CATEGORIES_SUCCESS:
      state.categories = { loading: false, data: action.data};
      return {...state};
    case GET_CATEGORIES_LOADING:
      state.categories.loading = true;
      return {...state};
    case GET_CATEGORIES_ERROR:
      state.categories = { loading: false, data: action.data};
      return {...state};
    default:
      return state;
  }
};
