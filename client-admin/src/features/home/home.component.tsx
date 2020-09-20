import React, { Fragment } from 'react';
import { LOGIN_FULL_PATH } from 'shared/constants/paths.const';
import { useAuth } from 'shared/guards/useAuth';

const HomeComponent = () => {
  useAuth(LOGIN_FULL_PATH);
  return (
    <Fragment>
      <h1>Home</h1>
    </Fragment>
  );
};
export default HomeComponent;
