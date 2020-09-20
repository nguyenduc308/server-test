import React, { Fragment, Suspense, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { cookieService, httpClient } from 'shared/service';
import { authAction } from 'store/auth/auth-actions';
import { TOKEN } from 'shared/constants/keys.const';
import { checkTokenExprired } from 'shared/helpers/token.helper';
import { RoutesComponent } from 'routes';
import { LoadingComponent } from 'shared/components';

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
      <div className="app-root">
        <Suspense fallback={<LoadingComponent />}>
          <BrowserRouter>
            <RoutesComponent />
          </BrowserRouter>
        </Suspense>
      </div>
    </Fragment>
  );
};

export default App;
