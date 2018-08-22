import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import CreateLink from './components/CreateLink';
import Header from './components/Header';
import LinkListPage from './components/LinkListPage';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path='/' component={LinkListPage} />
            <Route exact path='/create' component={CreateLink} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
