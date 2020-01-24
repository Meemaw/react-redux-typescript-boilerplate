import React from 'react';
import { render } from 'test/utils';
import { waitForElementToBeRemoved } from '@testing-library/react';

import TickerPage from './index';

describe('<Ticker />', () => {
  it('Should display listing', async () => {
    const { queryByText, getByTestId } = render(<TickerPage />);
    expect(queryByText('Ticker')).toBeInTheDocument();
    expect(queryByText('Loading...')).toBeInTheDocument();

    await waitForElementToBeRemoved(() => queryByText('Loading...'));

    const tickerList = getByTestId('ticker-list');
    expect(tickerList.childElementCount).toEqual(100);

    const firstListing = tickerList.firstChild as HTMLElement;
    expect(firstListing.textContent).toContain('Bitcoin');
  });
});
