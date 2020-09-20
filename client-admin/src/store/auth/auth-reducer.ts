import { ActionType, createReducer } from 'typesafe-actions';
import { authAction } from './auth-actions';

export type AuthActionType = ActionType<typeof authAction>;

export type AuthStateType = {
  token: string | null;
  user: any;
  isAuth: boolean;
};

const initialState = {
  token: null,
  user: null,
  isAuth: false,
} as AuthStateType;

export const authReducer = createReducer(initialState)
  .handleAction(
    [authAction.loginSuccess],
    (state: AuthStateType, action: any) => ({
      ...state,
      token: action.payload,
      isAuth: true,
    }),
  )
  .handleAction(
    [authAction.loginFailed],
    (state: AuthStateType, action: any) => ({
      ...state,
      token: '',
      isAuth: false,
    }),
  )
  .handleAction(
    [authAction.autoLogin],
    (state: AuthStateType, action: any) => ({
      ...state,
      token: action.payload,
      isAuth: true,
    }),
  )
  .handleAction(
    [authAction.autoLogout],
    (state: AuthStateType, action: any) => ({
      ...state,
      token: null,
      isAuth: false,
    }),
  )
  .handleAction([authAction.logout], (state: AuthStateType, action: any) => ({
    ...state,
    token: null,
    isAuth: false,
  }));
