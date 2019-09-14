import React from 'react';
import { render } from 'react-dom';
import * as Sentry from '@sentry/browser';
import * as GoogleAnalytics from 'react-ga';
import AppProviders from 'containers/AppProvider';
import App from 'pages';

Sentry.init({
  dsn: undefined,
  environment: '<your_environment>',
  release: '<your_release>',
  debug: true,
});

GoogleAnalytics.initialize('<your_tracking_code>', {
  debug: true,
});

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
