import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationBox from './application-box';
import About from './about';
import Contact from './contact';
// import Product from './product';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import Application from './application';
import PRODUCTS from './products.json';

const Product = ({ params: { id } }) => (
    <div>
        <h3>{id}</h3>
    </div>
    )
const Products = ({ children }) => (
  <div>
  <h2>Display Item</h2>
  These are our products
  {children}
  </div>
  )

ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="home" component={ApplicationBox}/>
    <Route path="about" component={About}/>
    <Route path="contact" component={Contact}/>
    <Route path="products" component={Products}>
    <Route path=":id" component={Product}/>
    </Route>
    </Router>,
    document.getElementById('content'));
