import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store/storeConfig';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => {
  const isAuth = state.auth.isAuth;
  return { isAuth };
};

const AppContainer = connect(mapStateToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
