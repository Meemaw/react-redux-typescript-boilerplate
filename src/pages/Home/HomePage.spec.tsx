import React from 'react';
import { render } from 'test/utils';

import { Base } from './HomePage.stories';

describe('<HomePage />', () => {
  it('Should render welcome message', () => {
    const { queryByText } = render(<Base />);
    expect(
      queryByText('React Redux Typescript Boilerplate')
    ).toBeInTheDocument();
  });
});
