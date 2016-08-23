import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationBox from './application-box';
import About from './about';
import App from './app';
import Contact from './contact';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Product from './product';
import Products from './products';

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ApplicationBox}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="products" component={Products}>
            <Route path=":id" component={Product}/>
        </Route>
      </Route>
    </Router>,
    document.getElementById('content'));
