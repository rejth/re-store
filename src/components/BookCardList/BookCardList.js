import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from '../../utils';
import { withBookStoreService } from '../Hoc';
import { fetchBooks } from '../../actions';
import BookCard from '../BookCard';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

const BookCardList = ({ books, loading, error, fetchBooks }) => {
  useEffect(() => fetchBooks(), [fetchBooks]);

  if (loading) return <Spinner />;
  if (error) return <ErrorIndicator />;

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

// принимаем state из store и возвращаем {prop: state.key}
// для передачи state в компонент в качестве props
const mapStateToProps = state => ({
  books: state.books,
  loading: state.loading,
  error: state.error,
});

// mapDispatchToProps может быть функцией или объектом
// если функция, то она обязательно принимает dispatch
// возвращает объект {prop: (newData) => dispatch(action)} для передачи dispatched prop в компонент
// если объект, то это объект с action creator, action creator автоматически передается в bindActionCreator()
// и возвращает объект {prop: (newData) => dispatch(action)}, где prop это booksLoaded
const mapDispatchToProps = (dispatch, ownProps) => {
  // ownProps нужен, чтобы получить доступ к свойству, приходящему из HOC withBookStoreService()
  const { bookStoreService } = ownProps;
  return { fetchBooks: fetchBooks(dispatch, bookStoreService) };
};

BookCardList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  fetchBooks: PropTypes.func.isRequired,
};

// BookCardList обрачивается сначала connect(), потом withBookStoreService()
// withBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookCardList))
// compose() позволяет упростить запись
export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookCardList);
