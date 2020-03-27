import React from 'react';
import { render, sandbox } from 'test/utils';
import { waitForElementToBeRemoved } from '@testing-library/react';

import { Base } from './Ticker.stories';

describe('<Ticker />', () => {
  it('Should display listing', async () => {
    const { getTicker } = Base.story.setupMocks(sandbox);
    const { queryByText, getByTestId } = render(<Base />);
    expect(queryByText('Ticker')).toBeInTheDocument();
    expect(queryByText('Loading...')).toBeInTheDocument();
    sandbox.assert.calledOnce(getTicker);

    await waitForElementToBeRemoved(() => queryByText('Loading...'));

    const tickerList = getByTestId('ticker-list');

    const firstListing = tickerList.firstChild as HTMLElement;
    expect(firstListing.textContent).toContain('Bitcoin');
    expect(firstListing.textContent).toContain('500.00$'); // mocked response
  });
});
