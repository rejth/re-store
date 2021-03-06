import React from 'react';
import { BookStoreServiceConsumer } from '../BookStoreServiceContext';

const withBookStoreService = View =>
  function consumerWrapper(props) {
    return (
      <BookStoreServiceConsumer>
        {() => <View {...props} />}
      </BookStoreServiceConsumer>
    );
  };

export default withBookStoreService;
