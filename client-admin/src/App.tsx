import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import AboutUs from 'features/about-us';
import { cookieService, httpClient } from 'shared/service';
import { Login } from './features/login';
import { authAction } from 'store/auth/auth-actions';
import { TOKEN } from 'shared/constants/keys.const';
import { checkTokenExprired } from 'shared/helpers/token.helper';

const App: React.FC = ({ isAuth }: any): JSX.Element => {
  let timerLogin: any;
  const dispatch = useDispatch();

  const setupSectionLogin = (expiredTime: number) => {
    const duration = expiredTime * 1000 - new Date().getTime();
    timerLogin = setTimeout(() => {
      dispatch(authAction.autoLogout());
    }, duration);
  };

  const clearSectionLogin = () => {
    clearTimeout(timerLogin);
  };

  useEffect(() => {
    const token = cookieService.getItem(TOKEN);
    const [isExpired, decoded] = checkTokenExprired(token);
    if (token && !isExpired) {
      httpClient.registerToken('abc123');
      dispatch(authAction.autoLogin(token));
      setupSectionLogin(decoded.exp);
    }
    return () => {
      clearSectionLogin();
    };
  }, [dispatch]);

  useEffect(() => {
    if (!isAuth && timerLogin) {
      clearSectionLogin();
    }
  }, [isAuth, timerLogin]);

  return (
    <Fragment>
      <BrowserRouter>
        <Route path="/about-us" component={AboutUs}></Route>
        <Route path="/login" component={Login}></Route>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
