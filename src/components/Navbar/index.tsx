import React from 'react';
import { Link } from 'react-router-dom';
import * as Paths from 'constants/paths';

const Navbar: React.FC = () => {
  return (
    <div>
      <Link to={Paths.ROOT_PATH}>Home</Link>
      <Link to={Paths.TICKER_PATH} style={{ marginLeft: '20px' }}>
        Ticker
      </Link>
    </div>
  );
};

export default Navbar;
