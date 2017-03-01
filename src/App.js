import './App.css'

import React, { Component } from 'react';

import HOC from './HOC';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.alwaysTrue ?
        <div>
          <a>THIS ALWAYS GETS RENDERED IN AN HOC</a>
        </div> :  this.props.greeting
        }
      </div>
    );
  }
}

export default App
export const AppHijacked = HOC(App);