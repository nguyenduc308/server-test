import React, { Fragment } from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';

import { IRoute } from 'routes/routes';
import { routes } from './auth.routes';

const AuthComponent = () => {
  const match = useRouteMatch();

  return (
    <Fragment>
      <Switch>
        <Redirect exact from={match.url} to={`${match.url}/login`} />
        {routes.map((route: IRoute, index: number) => {
          return (
            <Route
              key={index}
              path={`${match.url}${route.path}`}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
      </Switch>
    </Fragment>
  );
};

export default AuthComponent;
