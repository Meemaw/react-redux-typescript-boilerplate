import { render as renderImpl } from '@testing-library/react';
import React from 'react';
import AppProviders from 'containers/AppProviders';

import {
  createTestBrowserHistory,
  createTestStore,
  BaseRenderOptions,
} from './configure';

function render(component: React.ReactNode, options: BaseRenderOptions = {}) {
  const { redux: renderInitialState = {}, pathname } = options;
  const history = createTestBrowserHistory(pathname);
  const store = createTestStore(renderInitialState);

  const renderResult = renderImpl(
    <AppProviders history={history} store={store}>
      {component}
    </AppProviders>
  );

  return { ...renderResult, history, store };
}

export default render;
