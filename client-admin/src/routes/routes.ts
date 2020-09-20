import { NotFoundComponent } from 'features/not-found';
import React from 'react';
import { ABOUT_US_PATH, AUTH_PATH } from 'shared/constants/paths.const';

export interface IRoute {
  path: string;
  exact?: boolean;
  loadComponent?: React.LazyExoticComponent<() => JSX.Element>;
  component?: () => JSX.Element;
}

export const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    loadComponent: React.lazy(() => import('features/home')),
  },
  {
    path: `/${ABOUT_US_PATH}`,
    exact: false,
    loadComponent: React.lazy(() => import('features/about-us')),
  },
  {
    path: `/${AUTH_PATH}`,
    exact: false,
    loadComponent: React.lazy(() => import('features/auth')),
  },
  // {
  //     path: '*',
  //     exact: false,
  //     component: NotFoundComponent,
  // }
];
