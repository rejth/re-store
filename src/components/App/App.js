import React from 'react';
import { BookStoreServiceProvider } from '../BookStoreServiceContext';

const App = () => (
  <BookStoreServiceProvider value={null}>
    <div className="App">Hello world!</div>
  </BookStoreServiceProvider>
);

export default App;
