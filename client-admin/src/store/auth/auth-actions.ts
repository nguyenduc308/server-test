import { ILoginCredentials } from '@type/auth.type';
import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
} from 'shared/constants/auth-reducer.const';
import { action, deprecated } from 'typesafe-actions';
const { createAction } = deprecated;

export const authAction = {
  login: createAction(LOGIN, (action) => (credentials: ILoginCredentials) =>
    action(credentials),
  ),
  loginSuccess: createAction(
    LOGIN_SUCCESS,
    (action) => (credentials: ILoginCredentials) => action(credentials),
  ),
  // loginFailed: createAction(LOGIN_FAILED, )
};
