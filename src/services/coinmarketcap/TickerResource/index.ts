import api from 'utils/api';
import { ResourceFetch } from 'meta/types/Api';
import { Dictionary } from 'lodash';

const { GET } = api;

export type Listing = {
  id: number;
  name: string;
  symbol: string;
  quotes: { USD: { price: number } };
};

export type TickerData = Dictionary<Listing>;

type TickerResponse = {
  data: TickerData;
};

interface TickerResource {
  getTicker: ResourceFetch<TickerResponse>;
}

const TickerResource: TickerResource = {
  getTicker: GET('https://api.coinmarketcap.com/v2/ticker/', { authenticated: false }),
};

export default TickerResource;
