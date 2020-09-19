import { ActionType, createReducer } from 'typesafe-actions';
import { authAction } from './auth-actions';

export type AuthActionType = ActionType<typeof authAction>;

export type AuthStateType = {
  token: string | null;
  user: any;
};

const initialState = {
  token: null,
  user: null,
} as AuthStateType;

export const authReducer = createReducer(initialState)
  .handleAction(
    [authAction.loginSuccess],
    (state: AuthStateType, action: any) => ({
      ...state,
      token: action.payload,
    }),
  )
  .handleAction(
    [authAction.autoLogin],
    (state: AuthStateType, action: any) => ({
      ...state,
      token: action.payload,
    }),
  )
  .handleAction(
    [authAction.autoLogout],
    (state: AuthStateType, action: any) => ({
      ...state,
      token: null,
    }),
  );
