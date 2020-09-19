import { Action } from 'redux';
import { FETCH_ERROR } from 'shared/constants/error-reducer.const';

export default (state = {}, action: any) => {
  switch (action.type) {
    case FETCH_ERROR:
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};
