import React, { Component } from 'react';

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.greeting}
      </div>
    );
  }
}

App.propTypes = {
  greeting: React.PropTypes.string
}

export default App;
