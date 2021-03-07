import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from '../../utils';
import { withBookStoreService } from '../Hoc';
import { booksLoaded } from '../../actions';
import BookCard from '../BookCard';

const BookCardList = ({ books, bookStoreService, booksLoaded }) => {
  useEffect(() => {
    // получаем новые данные
    const data = bookStoreService.getBooks();
    // делаем dispatch для обновления state
    booksLoaded(data);
  }, [bookStoreService, booksLoaded]);

  return (
    <div className="row">
      {books.map(book => (
        <div className="col-sm-6" key={book.id}>
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
};

// принимаем state из store и возвращаем {prop: state.key} для передачи state в компонент
const mapStateToProps = state => ({ books: state.books });

// mapDispatchToProps может быть функцией или объектом
// если функция, то она возвращает {prop: (newData) => dispatch(action)} для передачи dispatched prop в компонент
// если объект, то это объект с action creator, action creator автоматически передается в bindActionCreator()
// и возвращает {prop: (newData) => dispatch(action)}, где prop это booksLoaded
const mapDispatchToProps = { booksLoaded };

BookCardList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  bookStoreService: PropTypes.object.isRequired,
  booksLoaded: PropTypes.func.isRequired,
};

// BookCardList обрачивается сначала connect(), потом withBookStoreService()
// withBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookCardList))
// compose() позволяет упростить запись
export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookCardList);
