import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationBox from './application-box';
import About from './about';
import Contact from './contact';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={ApplicationBox}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    </Router>,
    document.getElementById('content'));
