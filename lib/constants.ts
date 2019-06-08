export const DISTANCE_FROM_TOP = 64;
export const LINE_HEIGHT = DISTANCE_FROM_TOP / 1.5;
export const NUMBER_OF_FEATURED_PRODUCTS = 8;

const ASSETS_PREFIX = 'assets/';
export const LOCAL_ASSET_IMAGES = [
  `${ASSETS_PREFIX}slider-1-full.jpg`,
  `${ASSETS_PREFIX}slider-2-full.jpg`,
  `${ASSETS_PREFIX}slider-4.jpg`,
];

export const ONLINE_ASSET_IMAGES = [
  'http://fab.oxygenna.com/fashion/wp-content/uploads/sites/2/2016/02/bg8-notinclude.jpg',
  'http://fab.oxygenna.com/fashion/wp-content/uploads/sites/2/revslider/fab/slide-1-full.jpg',
  'http://fab.oxygenna.com/fashion/wp-content/uploads/sites/2/revslider/fab/slide-2-full.jpg',
  'http://fab.oxygenna.com/fashion/wp-content/uploads/sites/2/revslider/fab/slide-4-notinclude.jpg',
];

export const ONLINE_DEMO_PRODUCT_IMAGES =
  'https://cdn.shopify.com/s/files/1/0340/2849/products/TC2016_SS_front_grande.jpg?v=1460557226';

export const API_PREFIX = 'https://backendapi.turing.com';
export const IMAGE_DIRECTORY_PREFIX = `${API_PREFIX}/images/products/`;

// Actions String
export const GET_ALL_PRODUCTS_LOADING = 'GET_ALL_PRODUCTS_LOADING';
export const GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';
export const GET_ALL_PRODUCTS_ERROR = 'GET_ALL_PRODUCTS_ERROR';

export const ADD_FEATURED_PRODUCTS = 'ADD_FEATURED_PRODUCTS';

export const GET_DEPARTMENT_SUCCESS = 'GET_DEPARTMENT_SUCCESS';
export const GET_DEPARTMENT_LOADING = 'GET_DEPARTMENT_LOADING';
export const GET_DEPARTMENT_ERROR = 'GET_DEPARTMENT_ERROR';

export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_LOADING = 'GET_CATEGORIES_LOADING';
export const GET_CATEGORIES_ERROR = 'GET_CATEGORIES_ERROR';

export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_ERROR = 'ADD_TO_CART_ERROR';

export const SIGNIN_LOADING = 'SIGNIN_LOADING';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_ERROR = 'SIGNIN_ERROR';

export const SIGNUP_LOADING = 'SIGNUP_LOADING';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
