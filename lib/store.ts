import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import appAttributesReducer from './reducers/appAttributes.reducer';
import productsReducer from './reducers/products.reducer';
import authReducer from './reducers/auth.reducer';

export const octReducers = combineReducers({
  appAttributesReducer,
  productsReducer,
  authReducer
});

export function initializeStore (initialState = {}) {
  return createStore(
    octReducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};
