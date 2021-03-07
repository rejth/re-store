import React from 'react';
import PropTypes from 'prop-types';
import './Cart.css';

const Cart = ({ count, price }) => (
  <div className="cart">
    <a className="cart-icon" href="#">
      <i className="fa fa-cart-plus"></i>
    </a>
    <span className="cart-status">
      {count} items (${price})
    </span>
  </div>
);

Cart.propTypes = {
  count: PropTypes.number,
  price: PropTypes.number,
};

export default Cart;
