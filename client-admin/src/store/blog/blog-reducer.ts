// import { Action } from "redux"
import { FETCH_BLOGS_SUCCESS } from 'shared/constants/blog-reducer.const';

export type State = {
  user: any;
};
export class ActionType {
  readonly type: string | undefined;
  payload: any;
  constructor(payload: any) {
    this.payload = payload;
  }
}

export default (state = {}, action: ActionType) => {
  switch (action.type) {
    case FETCH_BLOGS_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
