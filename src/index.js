import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationBox from './application-box';
import About from './about';
import Contact from './contact';
import { Router, Route, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './product';
import Products from './products';

ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={ApplicationBox}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route path="products" component={Products}>
        <Route path=":id" component={Product}/>
        </Route>
    </Router>,
    document.getElementById('content'));
