import React from 'react';
import PropTypes from 'prop-types';
import './BookCard.css';

const BookCard = ({ book, onAddedBook }) => {
  const { id, title, author, price, image } = book;
  return (
    <div className="card text-dark bg-light border-dark mb-3">
      <div className="card-header">{title}</div>
      <img
        src={image}
        className="card-img-top"
        alt="Book Image"
        style={{ maxHeight: '700px', maxWidth: '538px' }}
      ></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h5 className="card-subtitle mb-2 text-muted">{author}</h5>
        <h3 className="card-text">{price} RUB</h3>
        <button
          className="btn btn-success btn-lg"
          style={{ marginTop: '20px' }}
          onClick={() => onAddedBook(id)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  onAddedBook: PropTypes.func.isRequired,
};

export default BookCard;
