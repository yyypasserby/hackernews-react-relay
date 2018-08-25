import React, { Component } from 'react';
import { NativeRouter } from 'react-router-native';

import MainView from './src/MainView';

class App extends Component {
  render() {
    return (
      <NativeRouter>
        <MainView />
      </NativeRouter>
    );
  }
}

export default App;
