import { GET_DEPARTMENT_SUCCESS, GET_DEPARTMENT_LOADING, GET_DEPARTMENT_ERROR, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_LOADING, GET_CATEGORIES_ERROR } from 'lib/constants';
import initialState from 'lib/initialState';

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_DEPARTMENT_SUCCESS:
      state.octAppReducer.departments = { loading: false, data: action.data};
      return {...state};
    case GET_DEPARTMENT_LOADING:
      state.octAppReducer.departments.loading = true;
      return {...state};
    case GET_DEPARTMENT_ERROR:
      state.octAppReducer.departments = { loading: false, data: action.data};
      return {...state};
    
    // Category state
    case GET_CATEGORIES_SUCCESS:
      state.octAppReducer.categories = { loading: false, data: action.data};
      return {...state};
    case GET_CATEGORIES_LOADING:
      state.octAppReducer.categories.loading = true;
      return {...state};
    case GET_CATEGORIES_ERROR:
      state.octAppReducer.categories = { loading: false, data: action.data};
      return {...state};
    default:
      return state;
  }
};
