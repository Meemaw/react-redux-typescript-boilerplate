import { ROOT_PATH, TICKER_PATH } from 'constants/paths';

import React from 'react';
import { Switch } from 'react-router-dom';
import PageRoute from 'components/PageRoute';
import Navbar from 'components/Navbar';

const HomePage = React.lazy(() => import('./Home'));
const TickerPage = React.lazy(() => import('./Ticker'));

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <PageRoute exact path={ROOT_PATH} component={HomePage} />
        <PageRoute exact path={TICKER_PATH} component={TickerPage} />
      </Switch>
    </div>
  );
};

export default App;
