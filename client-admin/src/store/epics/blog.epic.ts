import { Action } from 'redux';
import { ActionsObservable, Epic } from 'redux-observable';
import { filter, map, switchMap, catchError, take } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import { of } from 'rxjs';

import { IBlogResponse } from '@type/blog.type';
import {
  FETCH_BLOGS,
  FETCH_BLOGS_SUCCESS,
} from 'shared/constants/blog-reducer.const';
import { httpClient } from 'shared/service';
import { FETCH_ERROR } from 'shared/constants/error-reducer.const';

const fetchBlogEpic: Epic = (action$: ActionsObservable<Action>) =>
  action$.pipe(
    filter(isOfType(FETCH_BLOGS)),
    switchMap(() =>
      httpClient.get<IBlogResponse[]>('/blogs').pipe(
        catchError((error) =>
          of({
            type: FETCH_ERROR,
            payload: error,
            error: true,
          }),
        ),
        map((blogs) => ({
          type: FETCH_BLOGS_SUCCESS,
          payload: blogs,
        })),
      ),
    ),
    take(1),
  );

export default [fetchBlogEpic];
