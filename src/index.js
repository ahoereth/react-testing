import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationBox from './application-box';
import About from './about';
import Contact from './contact';
// import Product from './product';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Row} from 'reactstrap';
// import Application from './application';
import PRODUCTS from './products.json';
var $ = require ('jquery');

var result = id => $.grep(PRODUCTS, function(e){
    return e.id === id
});

var props = { food: 'default'};

const Product = ({ params: { id } }) => (
    <div>
    <Row>
    <h3 className="applicationName">
    {result(id)[0].name}
    </h3>
    <p>{result(id)[0].shortDescription}</p>
    <p>{result(id)[0].versionNumber}</p>
    <div className="screenshot">
    <img src={"../" + result(id)[0].imageUrl}/>
    </div>
    <Col className="col-md-3 sidebar-l sidebar-right hentry">
    <b>Regular License</b>     180 €
    Quality control
    Future updates
    6 months support from NerdHerd
    <a href="">What does support include?</a>
    <form action="">
    <input type="checkbox" name="extend-support" value="extend-yes"/>Extend support to 12 months
    </form>

    </Col>
    </Row>
    </div>
    )

const Products = ({ children }) => (
  <div>
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
