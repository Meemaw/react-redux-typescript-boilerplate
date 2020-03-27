import React, { useEffect } from 'react';
import CoinmarketcapResource from 'modules/coinmarketcap';
import Loading from 'components/Loading';
import useTicker from './useTicker';

const TickerPage = () => {
  const { coins, setCoins, setLoading, loading } = useTicker();

  useEffect(() => {
    setLoading(true);
    CoinmarketcapResource.getTicker().then((response) => {
      setCoins(Object.values(response.data));
    });
  }, [setCoins, setLoading]);

  return (
    <div>
      <h1>Ticker</h1>
      {loading ? (
        <Loading />
      ) : (
        <ul data-testid="ticker-list">
          {coins.map((coin) => {
            return (
              <li key={coin.id}>{`${
                coin.name
              } - ${coin.quotes.USD.price.toFixed(2)}$`}</li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default React.memo(TickerPage);
