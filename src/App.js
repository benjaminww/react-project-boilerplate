import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  render() {
    const title = 'React Project Boilerplate :)';

    return (
      <div>{title}</div>
    );
  }
}

export default hot(module)(App);
