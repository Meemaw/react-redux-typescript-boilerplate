import * as React from 'react';

import Routes from '../../Routes';
import Navbar from '../Navbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    );
  }
}

export default App;
