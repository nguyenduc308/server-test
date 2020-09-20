import { ActionsObservable } from 'redux-observable';
import { filter, map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { TOKEN } from 'shared/constants/keys.const';
import { httpClient, localStorageService } from 'shared/service';
import { isActionOf } from 'typesafe-actions';
import { authAction } from './auth-actions';

const loginEpic = (action$: ActionsObservable<any>) =>
  action$.pipe(
    filter(isActionOf(authAction.login)),
    switchMap(({ payload }) => {
      return httpClient.post('/auth/login', payload).pipe(
        map((response: any) => {
          localStorageService.setItem(TOKEN, response.token);

          return authAction.loginSuccess(response.token);
        }),
        catchError((err) => {
          localStorageService.removeItem(TOKEN);
          return of(authAction.loginFailed());
        }),
      );
    }),
  );

export default [loginEpic];

// state$: StateObservable<typeof rootReducer>
