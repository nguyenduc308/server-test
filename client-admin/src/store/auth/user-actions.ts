import { FETCH_USER, SET_USER } from 'shared/constants/user-reducer.const';
import { deprecated } from 'typesafe-actions';
const { createAction } = deprecated;

export const userAction = {
  fetchUserById: createAction(FETCH_USER, (action) => (id: string) =>
    action(id),
  ),
  setUser: createAction(SET_USER, (action) => (user: any) => action(user)),
};
