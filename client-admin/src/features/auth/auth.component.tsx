import React, { Fragment } from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';

import { IRoute } from 'routes/routes';
import { HOME_PAGE_PATH } from 'shared/constants/paths.const';
import { useNotAuth } from 'shared/guards/useNotAuth';
import { routes } from './auth.routes';

export const AuthComponent = () => {
  useNotAuth(HOME_PAGE_PATH);
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
