import React from 'react';
import PropTypes from 'prop-types';
import './BookCard.css';

const BookCard = ({ title, author, price, image }) => (
  <div className="card text-dark bg-light">
    <div className="card-header">{title}</div>
    <img
      src={`../img/${image}`}
      className="card-img-top"
      alt="Book Image"
      style={{ maxHeight: '700px', maxWidth: '538px' }}
    ></img>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
      <p className="card-text">{price} RUB</p>
      <button className="btn btn-success btn-lg">Add to Cart</button>
    </div>
  </div>
);

BookCard.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
};

export default BookCard;
