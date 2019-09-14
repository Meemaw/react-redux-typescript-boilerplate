import React from 'react';
import { render } from 'test/utils';
import { waitForElementToBeRemoved } from '@testing-library/dom';

import TickerPage from './index';

describe('<Ticker />', () => {
  it.only('Should display listing', async done => {
    const { queryByText, getByTestId } = render(<TickerPage />);
    expect(queryByText('Ticker')).toBeInTheDocument();
    expect(queryByText('Loading...')).toBeInTheDocument();

    await waitForElementToBeRemoved(() => queryByText('Loading...'));

    const tickerList = getByTestId('ticker-list');
    expect(tickerList.childElementCount).toEqual(100);

    const firstListing = tickerList.firstChild as HTMLElement;
    expect(firstListing.textContent).toContain('Bitcoin');

    done();
  });
});
