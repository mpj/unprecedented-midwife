// @flow
import React, { Component } from 'react';

import './App.css'

class App extends Component {
  props: {
    greeting?: string,
    loading: boolean
  }

  render() {
    return (
      <div className="App">
        {this.props.loading ? 'Loading' : this.props.greeting}
      </div>
    );
  }
}

export default App;
