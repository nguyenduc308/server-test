import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { IRoute, routes } from './routes';

const RoutesComponent = () => {
  return (
    <Fragment>
      <Switch>
        {routes.map((route: IRoute, index: number) => {
          return (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              component={route.loadComponent}
            ></Route>
          );
        })}
      </Switch>
    </Fragment>
  );
};

export default RoutesComponent;
