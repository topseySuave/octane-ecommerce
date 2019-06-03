import { actionTypes } from './store';

export const tick = () => {
  return { type: actionTypes.TICK };
};
