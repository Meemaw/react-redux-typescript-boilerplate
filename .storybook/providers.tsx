import React from 'react';
import { makeDecorator } from '@storybook/addons';

import {
  createTestBrowserHistory,
  createTestStore,
  BaseRenderOptions,
} from '../src/test/utils/configure';
import AppProviders from '../src/containers/AppProviders';

const APP_PROVIDERS_PARAMETER_NAME = 'withAppProviders';

type CustomWrapperOptions = {
  parameters: BaseRenderOptions;
};

export default makeDecorator({
  name: 'AppProviders',
  parameterName: APP_PROVIDERS_PARAMETER_NAME,
  skipIfNoParametersOrOptions: false,
  wrapper: (story, context, { parameters = {} }: CustomWrapperOptions) => {
    const store = createTestStore(parameters.redux);
    const history = createTestBrowserHistory(parameters.pathname);

    return (
      <AppProviders store={store} history={history}>
        {story(context)}
      </AppProviders>
    );
  },
});
