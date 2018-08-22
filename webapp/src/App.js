import React, { Component } from 'react';

import './App.css';

import CreateLink from './components/CreateLink';
import LinkListPage from './components/LinkListPage';

class App extends Component {
  render() {
    return (
      <div>
        <LinkListPage />
        <CreateLink />
      </div>
    );
  }
}

export default App;
