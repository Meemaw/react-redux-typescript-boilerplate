import api from '../../lib/api';
import { ResourceFetch } from '../../meta/types/Api';

const { GET } = api;

type CoinmarketCapServerResponse = {
  data: object;
  metadata: object;
};

interface CoinmarketCapResource {
  getTicker: ResourceFetch<CoinmarketCapServerResponse>;
}

const CoinmarketCapResource: CoinmarketCapResource = {
  getTicker: GET('https://api.coinmarketcap.com/v2/ticker/', { authenticated: false }),
};

export default CoinmarketCapResource;
