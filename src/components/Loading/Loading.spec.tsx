import React from 'react';
import { render } from 'test/utils';

import { Base } from './Loading.stories';

describe('<Loading />', () => {
  it('Should render loading text', () => {
    const { queryByText } = render(<Base />);
    expect(queryByText('Loading...')).toBeInTheDocument();
  });
});
