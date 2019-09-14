import React from 'react';
import { makeDecorator } from '@storybook/addons';

import AppProviders from '../src/containers/AppProvider';

export default makeDecorator({
  name: 'withProviders',
  parameterName: 'initialState',
  skipIfNoParametersOrOptions: false,
  wrapper: (story, context, { parameters: initialState }) => {
    return <AppProviders initialState={initialState}>{story(context)}</AppProviders>;
  },
});
