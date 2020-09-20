import { IRoute } from 'routes/routes';
import { REGISTER_PATH, LOGIN_PATH } from 'shared/constants/paths.const';
import LoginComponent from './login/login.component';
import RegisterComponent from './register/register.component';

export const routes: IRoute[] = [
  {
    path: `/${LOGIN_PATH}`,
    exact: false,
    component: LoginComponent,
  },
  {
    path: `/${REGISTER_PATH}`,
    exact: false,
    component: RegisterComponent,
  },
];
