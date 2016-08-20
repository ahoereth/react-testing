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
import withExampleBasename from './withExampleBasename'
var $ = require ('jquery');

var productData = id => $.grep(PRODUCTS, function(e){
    return e.id === id
});

var props = { food: 'default'};

const Product = ({ params: { id } }) => (

    <div>
    <Row>
    <Col className="col-md-7">

    <h3 className="applicationName">
    {productData(id)[0].name}
    </h3>
    <p>{productData(id)[0].shortDescription}</p>
    <p>{productData(id)[0].versionNumber}</p>
    <img src={"../" + productData(id)[0].imageUrl} className="modal-content" id="img01"/>
    <p/>
    {productData(id)[0].description}
    <p/><h5 className="lead">Support</h5>
    <hr/>
    We provide support for this product without any charges. If you have any problems just submit a <a href="">ticket</a>.
    <p/>
    <h5 className="lead">Release notes</h5>
    <hr/>
    <b>VER. {productData(id)[0].versionNo} ({productData(id)[0].releaseDate.substring(0,10)})</b><br/>
    <pre>Important bug fixes and interface improvements</pre>

    </Col>
    <Col className="col-md-4 sidebar-l sidebar-right hentry">
    <div className="sidebar-right-box small">
    <b><span className="lead">Regular License</span></b>     <span className="pull-right amount lead">€180</span>
    <p/>
    <span className="glyphicon glyphicon-check"/> Quality control
    <br/>
    Future updates
    <br/><span className="glyphicon glyphicon-check"/> 6 months support from NerdHerd
    <br /><a href=""><span className="small">What does support include?</span></a>
    <form action="">
    <p/><input type="checkbox" name="extend-support" value="extend-yes"/> Extend support to 12 months
    <p/>
    <button className="btn btn-info btn-md btn-block btn-success"><span className="glyphicon glyphicon-shopping-cart"/>Add to Cart</button>
    <button className="btn btn-info btn-md btn-block btn-primary">Buy Now</button>
    </form>
    </div>
    <div>
    <hr/>
    <table className="small">
    <tr>
    <td><b>Last Update</b></td>
    <td>23 August, 2016</td>
    </tr>
    <tr>
    <td><b>Created</b></td>
    <td>{productData(id)[0].releaseDate.substring(0,10)}</td>
    </tr>
    <tr>
    <td><b>Compatible Platforms</b></td>
    <td>Microsoft Windows 9, 10<br/>OSX 10.10+</td>
    </tr>
    </table>
    </div>
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
    <Route path="/" component={ApplicationBox}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route path="products" component={Products}>
        <Route path=":id" component={Product}/>
        </Route>
    </Router>,
    document.getElementById('content'));
