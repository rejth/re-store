import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Cart.css';

const Cart = ({ cartBooks }) => {
  let count = 0;
  let total = 0;

  if (cartBooks.length !== 0) {
    count = cartBooks.reduce((a, value) => a + value.count, 0);
    total = cartBooks.reduce((a, value) => a + value.total, 0);
  }

  return (
    <div className="cart">
      <a className="cart-icon" href="#">
        <i className="fa fa-cart-plus"></i>
      </a>
      <span className="cart-status">
        {count} items ({total} RUB)
      </span>
    </div>
  );
};

const mapStateToProps = state => ({ cartBooks: state.cartBooks });

Cart.propTypes = {
  cartBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Cart);
