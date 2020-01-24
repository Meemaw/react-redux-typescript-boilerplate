import React from 'react';
import ReactDOM from 'react-dom';
import AppProviders from 'containers/AppProviders';
import App from 'pages';
import createBrowserHistory from 'utils/history';
import configureStore from 'utils/store';

ReactDOM.render(
  <AppProviders history={createBrowserHistory()} store={configureStore()}>
    <App />
  </AppProviders>,
  document.getElementById('root')
);
