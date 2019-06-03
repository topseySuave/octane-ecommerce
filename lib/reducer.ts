import { exampleInitialState, actionTypes } from './store';

const reducer = (state = exampleInitialState, action: any) => {
  switch (action.type) {
    case actionTypes.TICK:
      return {...state};
    default:
      return state;
  }
};

export default reducer;
