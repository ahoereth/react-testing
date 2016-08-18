import React, { Component } from 'react';
import logo from './logo.svg';
// import AppIntro from './app-intro';
// import AppBox from './app-box';
import ApplicationBox from './application-box';
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "../sass/style.scss";
// require('../sass/main.scss');

class App extends Component {
  render() {
    return (
      <div className="App">
      <ApplicationBox/>
      </div>
      );
    }
}

export default App;
