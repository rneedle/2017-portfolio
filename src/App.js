import React, { Component } from 'react';
import './App.css';
import ProjectPages from './components/ProjectPages.react.js'

class App extends Component {
  _getHeader() {

  }
  render() {
    return (
      <div className="App">
        <div className="thick-line" />
        <div className="App-header">
          <div className="name">
            <div id="name">Rachel Needle</div>
            <a href="mailto:rachel.needle@gmail.com">{"rachel.needle@gmail.com"}</a>
          </div>
        </div>
        <div className="body">
          <div className="title-wrapper">
            <div className="title">
              Rachel is a multidisciplinary designer with experience in product, UX, identity, and graphic design. She is interested in the design of novel technology and design for overlooked customers and industries. Rachel is currently a product designer at Apple and holds a BA in Art from Yale University.
            </div>
          </div>
          <ProjectPages />
        </div>
      </div>
    );
  }
}

export default App;
