import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AboutUs from 'features/about-us';
import { httpClient } from 'shared/service';
import { Login } from './features/login';
import { useDispatch } from 'react-redux';
import { actionFetchBlogs } from './store/actions/blog.action';
const App = () => {
  httpClient.registerToken('abc123');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionFetchBlogs());
  }, [dispatch]);

  return (
    <Fragment>
      <BrowserRouter>
        <Route path="/about-us" component={AboutUs}></Route>
        <Route path="/login" component={Login}></Route>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
