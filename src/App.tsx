import React from 'react';
import Home from './Home';
import CharacterList from './CharacterList';
import { Redirect, Route, Switch } from 'react-router';

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/characters/:code' component={CharacterList} />
      </Switch>
    </div>
  );
}

export default App;
