import React, { FC } from 'react';
import { Helmet } from "react-helmet";
import { Redirect, Route, Switch } from 'react-router';
import Members from './components/Members';

const title = 'いろんな会社のメンバー';

const App: FC = () => (
  <>
    <Helmet htmlAttributes={{lang: 'ja'}}>
      <title>{title}</title>
    </Helmet>

    <header className='App-header'>
      <h1>{title}</h1>
    </header>
    <Switch>
      <Route path='/:companyName/members' component={Members} />
      <Redirect to='/' />
    </Switch>
  </>
)

export default App;
