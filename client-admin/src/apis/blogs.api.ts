import { httpClient } from 'shared/service';

export const fetchBlogs = () => {
  return httpClient.get('/blogs');
};
