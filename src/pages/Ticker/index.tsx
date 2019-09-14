import React, { useState, useEffect } from 'react';
import Loading from 'components/Loading';
import { TickerResource } from 'services';
import { TickerData } from 'services/coinmarketcap/TickerResource';

const TickerPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<TickerData>({});

  useEffect(() => {
    TickerResource.getTicker().then(resp => {
      setData(resp.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>Ticker</h1>
      {loading ? (
        <Loading />
      ) : (
        <ul data-testid="ticker-list">
          {Object.keys(data).map(key => {
            return (
              <li key={key}>{`${data[key].name} - ${data[key].quotes.USD.price.toFixed(2)}$`}</li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TickerPage;
