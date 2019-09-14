import * as Paths from 'constants/paths';

import React from 'react';
import { render } from 'test/utils';
import { fireEvent } from '@testing-library/dom';

import Navbar from './index';

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
