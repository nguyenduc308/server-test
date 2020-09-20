import React, { Fragment, Suspense, useCallback, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { httpClient, localStorageService } from 'shared/service';
import { authAction } from 'store/auth/auth-actions';
import { TOKEN } from 'shared/constants/keys.const';
import { checkTokenExprired } from 'shared/helpers/token.helper';
import { RoutesComponent } from 'routes';
import { LoadingComponent } from 'shared/components';

import '../node_modules/antd/dist/antd.less';
import HeaderComponent from 'shared/components/header/header.component';
import { Grid } from 'shared/components';

const App: React.FC = ({ isAuth }: any): JSX.Element => {
  let timerLogin: any;
  const dispatch = useDispatch();

  const setupSectionLogin = useCallback((expiredTime: number) => {
    const duration = expiredTime * 1000 - new Date().getTime();
    timerLogin = setTimeout(() => {
      dispatch(authAction.autoLogout());
    }, duration);
  }, []);

  const clearSectionLogin = () => {
    if (timerLogin) {
      clearTimeout(timerLogin);
    }
  };

  useEffect(() => {
    const token = localStorageService.getItem(TOKEN);
    const [isExpired, decoded] = checkTokenExprired(token);
    if (token && !isExpired) {
      httpClient.registerToken(token);
      dispatch(authAction.autoLogin(token));
      setupSectionLogin(decoded.exp);
    } else {
      localStorageService.removeItem(TOKEN);
      clearSectionLogin();
    }
  }, [dispatch, clearSectionLogin, setupSectionLogin]);

  return (
    <Fragment>
      <div className="app-root">
        <HeaderComponent />
        <Suspense fallback={<LoadingComponent />}>
          <BrowserRouter>
            <Grid>
              <RoutesComponent />
            </Grid>
          </BrowserRouter>
        </Suspense>
      </div>
    </Fragment>
  );
};

export default App;
