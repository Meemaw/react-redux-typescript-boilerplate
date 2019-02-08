import React from 'react';

import { TickerResource } from '../../services';

const initialState = Object.freeze({ data: {} });

type State = {
  data: any;
};

class TickerPage extends React.Component<{}, State> {
  readonly state: State = initialState;

  async componentDidMount() {
    const resp = await TickerResource.getTicker();
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
