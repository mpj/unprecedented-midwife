import React, { Component } from 'react';

import './App.css'

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        {this.props.greeting}
      </div>
    );
  }
}

export default App;
