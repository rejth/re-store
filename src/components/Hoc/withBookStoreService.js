import React from 'react';
import { BookStoreServiceConsumer } from '../BookStoreServiceContext';

const withBookStoreService = () => WrappedComponent =>
  function consumerWrapper(props) {
    return (
      <BookStoreServiceConsumer>
        {bookStoreService => (
          <WrappedComponent {...props} bookStoreService={bookStoreService} />
        )}
      </BookStoreServiceConsumer>
    );
  };

export default withBookStoreService;
