import React from 'react';
import Home from './Home';
import Characters from './Characters';
import { Redirect, Route, Switch } from 'react-router';

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/characters/:code' component={Characters} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
