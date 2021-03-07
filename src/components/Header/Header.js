import React from 'react';
import Cart from '../Cart';
import './Header.css';

const Header = () => (
  <div className="header">
    <h1 className="logo">
      <a href="#">ReStore</a>
    </h1>
    <Cart />
  </div>
);

export default Header;
