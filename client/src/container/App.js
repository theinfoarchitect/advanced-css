import React, { Component } from 'react';
import './App.scss';

import { Header } from '../components/index';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
      </div>
    );
  }
}

export default App;
