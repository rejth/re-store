import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart';
import './Header.css';

const Header = () => (
  <div className="header">
    <h1 className="logo">
      <Link to="/">Restore</Link>
    </h1>
    <Cart />
  </div>
);

export default Header;
