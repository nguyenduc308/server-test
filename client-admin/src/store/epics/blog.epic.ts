import { Action } from 'redux';
import { ActionsObservable, Epic } from 'redux-observable';
import { filter, map, switchMap } from 'rxjs/operators';
import { FETCH_BLOGS } from 'src/shared/constants/blog-reducer.const';
import { httpClient } from 'src/shared/service';
import { isOfType } from 'typesafe-actions';
import { actionFetchBlogsSuccess } from '../actions/blog.action';

const fetchBlogEpic: Epic = (action$: ActionsObservable<Action>) =>
  action$.pipe(
    filter(isOfType(FETCH_BLOGS)),
    switchMap(() => httpClient.get('/blogs')),
    map(actionFetchBlogsSuccess),
  );

export default [fetchBlogEpic];
