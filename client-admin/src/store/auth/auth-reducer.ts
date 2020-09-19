import { ActionType, createReducer } from 'typesafe-actions';
import { authAction } from './auth-actions';

export type AuthActionType = ActionType<typeof authAction>;

export type AuthStateType = {
  token: string | null;
};

const initialState = {
  token: null,
} as AuthStateType;

export const authReducer = createReducer(initialState).handleAction(
  [authAction.loginSuccess],
  (state: AuthStateType, action: AuthActionType) => ({
    ...state,
    token: action.payload,
  }),
);
