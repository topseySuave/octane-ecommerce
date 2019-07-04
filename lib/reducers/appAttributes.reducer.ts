import {
  GET_DEPARTMENT_SUCCESS, GET_DEPARTMENT_LOADING,
  GET_DEPARTMENT_ERROR, GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_LOADING, GET_CATEGORIES_ERROR,
  CURRENT_APP_ATTRIBUTE, FILTER_CATEGORY_MENU,
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
      state.categories = { ...state.categories, loading: false, data: action.data};
      return {...state};
    case GET_CATEGORIES_LOADING:
      state.categories.loading = true;
      return {...state};
    case GET_CATEGORIES_ERROR:
      state.categories = { ...state.categories, loading: false, data: action.data};
      return {...state};
    case FILTER_CATEGORY_MENU:
      const newState = { ...state };
      const stateClone = JSON.parse(JSON.stringify(newState));
      stateClone.categories.currentCategoryList = stateClone.categories.data.rows
        .filter((category: any) => category.department_id === action.id);
      return { ...stateClone };

    case CURRENT_APP_ATTRIBUTE:
      return { ...state, currentAppAttr: action.data };
    default:
      return state;
  }
};
