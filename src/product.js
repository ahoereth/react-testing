import React from 'react';
import {Row,Col} from 'reactstrap';
import PRODUCTS from './products.json';
// import Gallery from './gallery';

var $ = require ('jquery');

export default class Product extends React.Component {
    render() {
        var getProductData = id => $.grep(PRODUCTS, function(e){
            return e.id === id
        });
        var productData = getProductData(this.props.params.id)[0];

        return (
          <div>
          <Row>
          <Col className="col-md-7">
          <Row id="icon">
          <Col className="col-md-3 app-title">
          <img alt="{productData.name}" src={productData.iconUrl} />
          </Col>
          <Col className="col-md-9">
          <h3 className="applicationName">
          {productData.name}
          </h3>
          <p>{productData.shortDescription}</p>
          </Col>
          </Row>
          <div id="product-box">
          <img alt="{productData.name}" src={"../" + productData.imageUrl} className="modal-content" id="img01"/>
          </div>
          <p/>
          {productData.description}
          <p/><h5 className="lead">Support</h5>
          <hr/>
          We provide support for this product without any charges. If you have any problems just submit a <a href="">ticket</a>.
          <p/>
          <h5 className="lead">Release notes</h5>
          <hr/>
          <b>VER. {productData.versionNo} ({productData.releaseDate.substring(0,10)})</b><br/>
          <p/><pre>Important bug fixes and interface improvements</pre>
          </Col>
          <Col className="col-md-4 sidebar-l sidebar-right hentry">
          <div className="sidebar-right-box small">
          <div className="price">
          <b><span className="lead pull-left">Regular License</span></b>
          <span className=" amount lead">€180</span>
          </div>
          <p/>
          &#10003; Quality control
          <br/>
          &#10003; Future updates

          <br/>&#10003; 6 months support from HausTech
          <br /><a href=""><span className="small">What does support include?</span></a>
          <form action="">
          <p/><input type="checkbox" name="extend-support" value="extend-yes"/> Extend support to 12 months
          <p/>
          <a role="button" className="btn btn-info btn-md btn-block btn-success" href={"/dl/" + productData.name + ".application"}>Launch</a>
          <button className="btn btn-info btn-md btn-block btn-primary"><span className="glyphicon glyphicon-shopping-cart"/> Buy Now</button>
          </form>
          </div>
          <div>
          <hr/>
          <table className="small">
          <tbody>
          <tr>
          <td><b>Last Update</b></td>
          <td>23 August, 2016</td>
          </tr>
          <tr>
          <td><b>Created</b></td>
          <td>{productData.releaseDate.substring(0,10)}</td>
          </tr>
          <tr>
          <td><b>Compatible Platforms</b></td>
          <td>Microsoft Windows 9, 10<br/>OSX 10.10+</td>
          </tr>
          </tbody>
          </table>
          </div>
          </Col>
          </Row>
          </div>

          );
    }
}
