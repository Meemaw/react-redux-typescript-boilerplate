import React from 'react';
import { render } from 'test/utils';

import Loading from './index';

describe('<Loading />', () => {
  it('Should render loading text', () => {
    const { queryByText } = render(<Loading />);
    expect(queryByText('Loading...')).toBeInTheDocument();
  });
});
