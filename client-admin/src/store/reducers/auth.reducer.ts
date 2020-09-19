import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from 'shared/constants/auth-reducer.const';

export type State = {
  user: any;
};

export default (state = {}, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        token: '',
      };
    default:
      return state;
  }
};
