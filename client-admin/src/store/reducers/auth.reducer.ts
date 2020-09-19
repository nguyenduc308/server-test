import { Action } from 'redux';
import { LOGIN } from 'shared/constants/auth-reducer.const';

export type State = {
  user: any;
};

export default (state = {}, action: Action) => {
  switch (action.type) {
    case LOGIN:
      return state;
    default:
      return state;
  }
};
