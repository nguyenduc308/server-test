import { ActionsObservable, Epic, StateObservable } from 'redux-observable';
import { Action } from 'redux';
import { of } from 'rxjs';
import { switchMap, filter, catchError } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import { map } from 'rxjs/operators';

import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
} from 'shared/constants/auth-reducer.const';
import { State } from '../reducers/auth.reducer';
import { ILoginCredentials } from '@type/auth.type';
import { httpClient } from 'shared/service';

const loginEpic: Epic = (
  action$: ActionsObservable<Action>,
  state$: StateObservable<State>,
) =>
  action$.pipe(
    filter(isOfType(LOGIN)),
    switchMap((data) =>
      httpClient.post('/auth/login', data).pipe(
        catchError((error) =>
          of({
            type: LOGIN_FAILED,
            payload: error,
          }),
        ),
        map((response) => ({
          type: LOGIN_SUCCESS,
          payload: response,
        })),
      ),
    ),
  );

export default loginEpic;
