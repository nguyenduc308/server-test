import { ILoginCredentials } from '@type/auth.type';
import {
  AUTO_LOGIN,
  AUTO_LOGOUT,
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
} from 'shared/constants/auth-reducer.const';
import { deprecated } from 'typesafe-actions';
const { createAction } = deprecated;

export const authAction = {
  login: createAction(LOGIN, (action) => (credentials: ILoginCredentials) =>
    action(credentials),
  ),
  logout: createAction(LOGOUT, (action) => action),
  loginSuccess: createAction(LOGIN_SUCCESS, (action) => (response: any) =>
    action(response.token),
  ),
  loginFailed: createAction(LOGIN_FAILED, (action) => action),
  autoLogin: createAction(AUTO_LOGIN, (action) => (token: string) =>
    action(token),
  ),
  autoLogout: createAction(AUTO_LOGOUT, (action) => action),
};
