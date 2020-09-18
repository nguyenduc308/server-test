import {
  FETCH_BLOGS,
  FETCH_BLOGS_SUCCESS,
} from 'src/shared/constants/blog-reducer.const';

export const actionFetchBlogs = () => ({ type: FETCH_BLOGS });
export const actionFetchBlogsSuccess = (blogs: any) => ({
  type: FETCH_BLOGS_SUCCESS,
  payload: blogs,
});
