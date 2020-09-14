import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AboutUs from './features/about-us';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Route path="/about-us" component={AboutUs}></Route>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
