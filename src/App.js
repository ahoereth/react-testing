import React, { Component } from 'react';
import logo from './logo.svg';
// import AppIntro from './app-intro';
// import AppBox from './app-box';
import ApplicationBox from './application-box';
// import "../node_modules/bootstrap/scss/bootstrap.scss";

// require('../sass/main.scss');

var Navbar = React.createClass({
    render() {
        return (
            <nav class="navbar navbar-fixed-top navbar-dark bg-inverse">
            <a class="navbar-brand" href="#">Solarlux Apps</a>
            <ul class="nav navbar-nav">
            <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
            </li>
            </ul>
            <form class="form-inline pull-xs-right">
            <input class="form-control" type="text" placeholder="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </nav>
            )}
    })
export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <div class="container-fluid">
      <div class="row">
      <div class="col-sm-3 col-md-2 sidebar">
      <ul class="nav nav-sidebar">
      <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
      <li><a href="#">Reports</a></li>
      <li><a href="#">Analytics</a></li>
      <li><a href="#">Export</a></li>
      </ul>
      <ul class="nav nav-sidebar">
      <li><a href="">Nav item</a></li>
      <li><a href="">Nav item again</a></li>
      <li><a href="">One more nav</a></li>
      <li><a href="">Another nav item</a></li>
      <li><a href="">More navigation</a></li>
      </ul>
      <ul class="nav nav-sidebar">
      <li><a href="">Nav item again</a></li>
      <li><a href="">One more nav</a></li>
      <li><a href="">Another nav item</a></li>
      </ul>
      </div>

      <div class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 main">
      <div class="jumbotron">
      <div class="container">
      <h1 class="display-3">Solarlux Apps</h1>
      <p>Enjoy our amazing products.</p>
      <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
      </div>
      </div>

      {children}

      <hr/>

      <footer>
      <p>&copy; Solarlux Startup 2016</p>
      </footer>
      </div>
      </div>
      </div>
      </div>
      );
}
}
