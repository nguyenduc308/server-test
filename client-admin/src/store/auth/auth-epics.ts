import { ILoginCredentials } from '@type/auth.type';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { filter, map, switchMap } from 'rxjs/operators';
import { LOGIN } from 'shared/constants/auth-reducer.const';
import { httpClient } from 'shared/service';
import { rootReducer } from 'store/root';
import { isActionOf, isOfType } from 'typesafe-actions';
import { authAction } from './auth-actions';
import { AuthActionType } from './auth-reducer';

const loginEpic = (action$: ActionsObservable<any>) =>
  action$.pipe(
    filter(isActionOf(authAction.login)),
    switchMap(({ payload }) => {
      console.log(payload);

      return httpClient
        .post('/auth/login', payload)
        .pipe(map((response: any) => authAction.loginSuccess(response.token)));
    }),
  );

export default [loginEpic];

// state$: StateObservable<typeof rootReducer>
