import { IRoute } from 'routes/routes';
import LoginComponent from './login/login.component';
import RegisterComponent from './register/register.component';

export const routes: IRoute[] = [
  {
    path: '/login',
    exact: false,
    component: LoginComponent,
  },
  {
    path: '/register',
    exact: false,
    component: RegisterComponent,
  },
];
