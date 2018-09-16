import * as React from 'react';

import { CoinmarketCapResource } from '../../resources';

type State = { data: object };

class TickerPage extends React.Component<object, State> {
  state = { data: {} };

  async componentDidMount() {
    const resp = await CoinmarketCapResource.getTicker();
    this.setState({ data: resp.data });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <h1>Ticker</h1>
        {Object.keys(data).map(key => {
          return (
            <div key={key}>{`${data[key].name} - ${data[key].quotes.USD.price.toFixed(2)}$`}</div>
          );
        })}
      </div>
    );
  }
}

export default TickerPage;
