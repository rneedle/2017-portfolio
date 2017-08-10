import React, { Component } from 'react';
import './App.css';
import ProjectPages from './components/ProjectPages.react.js'

class App extends Component {
  _getHeader() {

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="name">
            <div id="name">Rachel Needle</div>
            <a href="mailto:rachel.needle@gmail.com">{"rachel.needle@gmail.com"}</a>
          </div>
        </div>
        <div className="body">
          <ProjectPages />
        </div>
      </div>
    );
  }
}

export default App;
