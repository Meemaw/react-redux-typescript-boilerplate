import React from 'react';
import { configureStory } from 'storybook/utils';
import CoinmarketcapResource from 'modules/coinmarketcap';

import TickerPage from './Ticker';

export default {
  title: 'Ticker',
};

export const Base = () => {
  return <TickerPage />;
};
Base.story = configureStory({
  setupMocks: (sandbox) => {
    const getTicker = sandbox
      .stub(CoinmarketcapResource, 'getTicker')
      .resolves({
        data: {
          1: {
            id: 1,
            name: 'Bitcoin',
            quotes: { USD: { price: 500 } },
            rank: 1,
            symbol: 'BTC',
          },
        },
      });

    return { getTicker };
  },
});
