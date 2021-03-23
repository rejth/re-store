import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CartPage, HomePage } from '../Pages';

const App = () => (
  <React.Fragment>
    <Switch>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/cart" component={CartPage} />
    </Switch>
  </React.Fragment>
);

export default App;
