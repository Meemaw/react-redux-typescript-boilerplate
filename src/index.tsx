import React from 'react';
import { render } from 'react-dom';
import AppProviders from 'containers/AppProvider';
import App from 'pages';

function renderApp(AppComponent: typeof App) {
  render(
    <AppProviders>
      <AppComponent />
    </AppProviders>,
    document.getElementById('root'),
  );
}

renderApp(App);

if (module.hot) {
  module.hot.accept('./pages', () => {
    const NextApp: typeof App = require('./pages').default;
    renderApp(NextApp);
  });
}
