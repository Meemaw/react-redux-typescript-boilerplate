import ky from 'ky';

export type Coin = {
  id: number;
  name: string;
  symbol: string;
  rank: number;
  quotes: {
    USD: { price: number };
  };
};

type TickerResponse = {
  data: Record<number, Coin>;
};

const CoinmarketcapResource = {
  getTicker: () =>
    ky.get('https://api.coinmarketcap.com/v2/ticker/').json<TickerResponse>(),
};

export default CoinmarketcapResource;
