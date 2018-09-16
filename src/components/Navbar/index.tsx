import * as React from 'react';
import { Link } from 'react-router-dom';
import { ROOT_PATH, TICKER_PATH } from '../../constants/paths';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Link to={ROOT_PATH}>Home</Link>
        <Link to={TICKER_PATH} style={{ marginLeft: '20px' }}>
          Ticker
        </Link>
      </div>
    );
  }
}

export default Navbar;
