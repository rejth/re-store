import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ count, price }) => (
  <Link to="/shop-cart">
    <div className="cart">
      <a className="cart-icon" href="#">
        <i className="fa fa-cart-plus"></i>
      </a>
      <span className="cart-status">
        {count} items (${price})
      </span>
    </div>
  </Link>
);

Cart.propTypes = {
  count: PropTypes.number,
  price: PropTypes.number,
};

export default Cart;
