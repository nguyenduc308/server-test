import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { IRoute, routes } from './routes';

const RoutesComponent = () => {
  return (
    <Fragment>
      <Switch>
        {routes.map(
          (
            { path, exact, loadComponent, component, layout: Layout }: IRoute,
            index: number,
          ) => {
            return (
              <Route
                key={index}
                path={path}
                exact={exact}
                component={loadComponent || component}
              />
            );
          },
        )}
      </Switch>
    </Fragment>
  );
};

export default RoutesComponent;
