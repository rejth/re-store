import React from 'react';
import Header from '../Header';
import BookCardList from '../BookCardList';
import TableContainer from '../Table';

const HomePage = () => (
  <React.Fragment>
    <Header />
    <BookCardList />
    <TableContainer />
  </React.Fragment>
);

export default HomePage;
