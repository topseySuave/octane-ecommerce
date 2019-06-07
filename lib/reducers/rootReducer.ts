import { actionTypes } from '../actions/actions';
import initialState from 'lib/initialState';

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.TICK:
      return {...state};
    default:
      return state;
  }
};

export default rootReducer;
