import React from 'react';
import {
  ABOUT_US_PATH,
  AUTH_PATH,
  CATEGORIES_PATH,
} from 'shared/constants/paths.const';
import { NotFoundComponent } from 'features/not-found';
import { LayoutNoColComponent } from 'shared/layouts';

export interface IRoute {
  path: string;
  exact?: boolean;
  loadComponent?: React.LazyExoticComponent<() => JSX.Element>;
  component?: React.FC<JSX.Element>;
  layout?: any;
}

export const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    loadComponent: React.lazy(() => import('features/home')),
    layout: LayoutNoColComponent,
  },
  {
    path: `/${ABOUT_US_PATH}`,
    exact: false,
    loadComponent: React.lazy(() => import('features/about-us')),
    layout: LayoutNoColComponent,
  },
  {
    path: `/${AUTH_PATH}`,
    exact: false,
    loadComponent: React.lazy(() => import('features/auth')),
    layout: LayoutNoColComponent,
  },
  {
    path: `/${CATEGORIES_PATH}`,
    exact: false,
    loadComponent: React.lazy(() => import('features/category')),
    layout: LayoutNoColComponent,
  },
  {
    path: '',
    exact: false,
    component: NotFoundComponent,
    layout: LayoutNoColComponent,
  },
];
