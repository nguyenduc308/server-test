import { combineEpics } from 'redux-observable';
import blogsEpic from './blog.epic';

export default combineEpics(...blogsEpic);
