import React from 'react';
import Footer from './footer';


export default class App extends React.Component {

  render() {
    return (


<div>
  <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
    <a className="navbar-brand" href="/">Solarlux Apps</a>
    <ul className="nav navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact">Contact</a>
      </li>
    </ul>
    <form className="form-inline pull-xs-right">
      <input className="form-control" type="text" placeholder="Search..."/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </nav>

 <div className="container-fluid">
    <div className="row">
      <div className="sidebar col-sm-3 col-md-2 sidebar">
        <ul className="nav nav-sidebar">
            <li className="active"><a href="#">Overview </a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Analytics</a></li>
            <li><a href="#">Export</a></li>
        </ul>

        <ul className="nav nav-sidebar">
            <li><a href="#">Nav item</a></li>
            <li><a href="#">Nav item again</a></li>
            <li><a href="#">One more nav</a></li>
            <li><a href="#">Another nav item</a></li>
            <li><a href="#">More navigation</a></li>
        </ul>
      </div>

      <div className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 main">
        <div id="content">
        </div>

        {this.props.children}

        <Footer/>
      </div>
    </div>
  </div>

</div>

 

    );
  }
}
