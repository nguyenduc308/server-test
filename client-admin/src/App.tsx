import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AboutUs from 'features/about-us';
import { cookieService, httpClient } from 'shared/service';
import { Login } from './features/login';
import { useDispatch } from 'react-redux';
import { authAction } from 'store/auth/auth-actions';
import { TOKEN } from 'shared/constants/keys.const';
import { checkTokenExprired } from 'shared/helpers/token.helper';
const App = () => {
  httpClient.registerToken('abc123');
  const dispatch = useDispatch();
  const setSectionLogin = (expiredTime: number) => {
    const amount = expiredTime * 1000 - new Date().getTime();
    setTimeout(() => {
      dispatch(authAction.autoLogout());
    }, amount);
  };
  useEffect(() => {
    const token = cookieService.getItem(TOKEN);
    const [isExpired, decoded] = checkTokenExprired(token);
    if (token && !isExpired) {
      dispatch(authAction.autoLogin(token));
      setSectionLogin(decoded.exp);
    }
  }, [dispatch]);

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
