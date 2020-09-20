import { NotFoundComponent } from 'features/not-found';
import React from 'react';

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
    path: '/about-us',
    exact: false,
    loadComponent: React.lazy(() => import('features/about-us')),
  },
  {
    path: '/auth',
    exact: false,
    loadComponent: React.lazy(() => import('features/auth')),
  },
  // {
  //     path: '*',
  //     exact: false,
  //     component: NotFoundComponent,
  // }
];
