import React from 'react';
import { render } from 'test/utils';

import HomePage from './index';

describe('<HomePage />', () => {
  it('Should render welcome message', () => {
    const { queryByText } = render(<HomePage />);
    expect(queryByText('React Redux Typescript Boilerplate')).toBeInTheDocument();
  });
});
