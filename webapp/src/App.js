import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LinkList from './components/LinkList';

class App extends Component {
  render() {
    const links = [
      {
        description: "yyy",
        url: "yyypasserby.github.io"
      },
      {
        description: "mmq",
        url: "mengqim.github.io"
      }
    ]
    return (
      <LinkList links={links}/>
    );
  }
}

export default App;
