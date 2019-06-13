import initialState from 'lib/initialState';
import {
  GET_ALL_PRODUCTS_SUCCESS, GET_ALL_PRODUCTS_LOADING,
  GET_ALL_PRODUCTS_ERROR, ADD_FEATURED_PRODUCTS, NUMBER_OF_FEATURED_PRODUCTS
} from 'lib/constants';

export default (state = initialState.products, action: any) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_SUCCESS:
      return { ...state, loading: false, allProducts: action.data };
    case GET_ALL_PRODUCTS_LOADING:
      return {...state, loading: true };
    case GET_ALL_PRODUCTS_ERROR:
      return { ...state, loading: false, error: action.data };
    case ADD_FEATURED_PRODUCTS:
      const allFeaturedProducts = [ ...state.allProducts.rows.slice(0, NUMBER_OF_FEATURED_PRODUCTS) ];
      return { ...state, featuredProducts: allFeaturedProducts };
    default:
      return state;
  }
};
