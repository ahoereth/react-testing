import React from 'react';
import { Link } from 'react-router'

export default class Navigation extends React.Component {
    render() {
        return (
<div>
            <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
            <Link   to="/" className="navbar-brand">Solarlux Apps</Link>
            <ul role="nav" className="nav navbar-nav">
            <li className="nav-item active">
            <Link   to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
            <Link   to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
            <Link   to="/contact" className="nav-link">Contact</Link>
            </li>
            </ul>
            <form className="form-inline pull-xs-right">
            <input className="form-control" type="text" placeholder="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </nav>
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
            <!-- Main jumbotron for a primary marketing message or call to action -->
            <div class="jumbotron">
            <div class="container">
            <h1 class="display-3">Solarlux Apps</h1>
            <p>Enjoy our amazing products.</p>
            <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
            </div>
            </div>
            </div>
            )
    }
}
