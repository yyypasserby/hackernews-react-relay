import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import CreateLink from './components/CreateLink';
import Header from './components/Header';
import LinkListPage from './components/LinkListPage';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className='center w85'>
        <Header />
        <div className='ph3 pv1 background-gray'>
          <Switch>
            <Route exact path='/' component={LinkListPage} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/create' component={CreateLink} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
