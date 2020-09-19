import { ILoginCredentials } from '@type/auth.type';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { filter, map, switchMap } from 'rxjs/operators';
import { TOKEN } from 'shared/constants/keys.const';
import { cookieService, httpClient } from 'shared/service';
import { isActionOf } from 'typesafe-actions';
import { authAction } from './auth-actions';

const loginEpic = (action$: ActionsObservable<any>) =>
  action$.pipe(
    filter(isActionOf(authAction.login)),
    switchMap(({ payload }) => {
      return httpClient.post('/auth/login', payload).pipe(
        map((response: any) => {
          cookieService.setItem(TOKEN, response.token, 10000);
          return authAction.loginSuccess(response);
        }),
      );
    }),
  );
export default [loginEpic];

// state$: StateObservable<typeof rootReducer>
