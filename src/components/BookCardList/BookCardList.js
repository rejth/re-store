import React from 'react';
import PropTypes from 'prop-types';
import BookCard from '../BookCard';

const BookCardList = ({ books }) => (
  <div className="row">
    <div className="col-sm-6">
      <BookCard
        title={books[0].title}
        author={books[0].author}
        price={books[0].price}
        image={'book1.jpg'}
      />
    </div>
    <div className="col-sm-6">
      <BookCard
        title={books[0].title}
        author={books[0].author}
        price={books[0].price}
        image={'book1.jpg'}
      />
    </div>
  </div>
);

BookCardList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BookCardList;
