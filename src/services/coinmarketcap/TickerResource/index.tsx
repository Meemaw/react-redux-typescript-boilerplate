import api from '../../../lib/api';
import { ResourceFetch } from '../../../meta/types/Api';

const { GET } = api;

type TickerResponse = {
  data: object;
  metadata: object;
};

interface TickerResource {
  getTicker: ResourceFetch<TickerResponse>;
}

const TickerResource: TickerResource = {
  getTicker: GET('https://api.coinmarketcap.com/v2/ticker/', { authenticated: false }),
};

export default TickerResource;
