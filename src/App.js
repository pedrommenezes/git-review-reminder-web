import React, { Component } from 'react';
import './App.scss';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="notification">
          This container is <strong>centered</strong> on desktop.
        </div>
      </div>
    );
  }
}

export default App;
