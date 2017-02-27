// @flow
import React, { Component } from 'react';

import './App.css'

class App extends Component {
  props: {
    greeting: string
  }

  render() {
    return (
      <div className="App">
        {this.props.greeting}
      </div>
    );
  }
}

export default App;
