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
        <PageRoute exact path="/" component={HomePage} />
        <PageRoute exact path="/ticker" component={TickerPage} />
      </Switch>
    </div>
  );
};

export default App;
