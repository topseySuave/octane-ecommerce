import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';

export const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
};

export const actionTypes = {
  TICK: 'TICK',
};

export function initializeStore (initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}
