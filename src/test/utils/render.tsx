import { render as renderImpl } from '@testing-library/react';
import React from 'react';
import { RootState } from 'store/types';
import AppProviders from 'containers/AppProvider';

export type RenderOptions = {
  initialState?: Partial<RootState>;
};

function render(component: React.ReactNode, options: RenderOptions = {}) {
  const { initialState = {} } = options;

  const renderResult = renderImpl(
    <AppProviders initialState={initialState}>{component}</AppProviders>,
  );

  return renderResult;
}

export default render;
