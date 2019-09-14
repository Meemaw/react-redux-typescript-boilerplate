import React from 'react';
import { render } from 'test/utils';
import * as Paths from 'constants/paths';

import Navbar from './index';
import { fireEvent } from '@testing-library/dom';

describe('<Navbar />', () => {
  it('Can navigate between Ticker and Home page', () => {
    const { getByText } = render(<Navbar />);
    expect(window.location.pathname).toEqual(Paths.ROOT_PATH);

    fireEvent.click(getByText('Ticker'));
    expect(window.location.pathname).toEqual(Paths.TICKER_PATH);

    fireEvent.click(getByText('Home'));
    expect(window.location.pathname).toEqual(Paths.ROOT_PATH);
  });
});
