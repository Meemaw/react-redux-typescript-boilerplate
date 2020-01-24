import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/ticker" style={{ marginLeft: '20px' }}>
        Ticker
      </Link>
    </div>
  );
};

export default React.memo(Navbar);
