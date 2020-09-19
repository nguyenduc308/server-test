import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { authEpics, authReducer } from './auth';
import { blogReducer } from './blog';
import blogEpic from './blog/blog-epic';

export const rootReducer = combineReducers({
  blog: blogReducer,
  auth: authReducer,
});

export const rootEpic = combineEpics(...blogEpic, ...authEpics);
