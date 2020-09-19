import { ActionsObservable, Epic, StateObservable } from 'redux-observable';
import { Action } from 'redux';
import { LOGIN } from 'shared/constants/auth-reducer.const';
import { State } from '../reducers/auth.reducer';
import { switchMap } from 'rxjs/operators';
import { ILoginCredentials } from '@type/auth.type';
import { httpClient } from 'shared/service';

const login = (credentials: ILoginCredentials) => ({
  type: LOGIN,
  payload: credentials,
});

const loginEpic: Epic = (
  action$: ActionsObservable<Action>,
  state$: StateObservable<State>,
) =>
  action$
    .ofType(login)
    .pipe(switchMap((data) => httpClient.post('/auth/login', data)));

export default loginEpic;
