import React from 'react';
import ReactDOM from 'react-dom';
import Jumbo from './header.js';

var ProductCategoryRow = React.createClass({
  render: function() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);
  }
});

var ProductRow = React.createClass({
  render: function() {
    var name = this.props.product.recent ?
    this.props.product.name :
    <span style={{color: 'red'}}>
    {this.props.product.name}
    </span>;
    return (

      <tr>
      <td>{name}</td>
      <td>{this.props.product.price}</td>
      <td><img src={this.props.product.src}/></td>
      </tr>
      );
  }
});

var ProductTable = React.createClass({
  render: function() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.recent && this.props.recentOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    }.bind(this));
    return (
      <table>
      <thead>
      <tr>
      <th>Name</th>
      <th>Price</th>
      </tr>
      </thead>
      <tbody>{rows}</tbody>
      </table>
      );
  }
});

var SearchBar = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.recentOnlyInput.checked
      );
  },
  render: function() {
    return (
      <form>
      <input
      type="text"
      placeholder="Search..."
      value={this.props.filterText}
      ref="filterTextInput"
      onChange={this.handleChange}
      />
      <p>
      <input
      type="checkbox"
      checked={this.props.recentOnly}
      ref="recentOnlyInput"
      onChange={this.handleChange}
      />
      {' '}
      Only show recent products
      </p>
      </form>
      );
  }
});

var FilterableProductTable = React.createClass({
  getInitialState: function() {
    return {
      filterText: '',
      recentOnly: false
    };
  },

  handleUserInput: function(filterText, recentOnly) {
    this.setState({
      filterText: filterText,
      recentOnly: recentOnly
    });
  },

  render: function() {
    return (
      <div>
      <SearchBar
      filterText={this.state.filterText}
      recentOnly={this.state.recentOnly}
      onUserInput={this.handleUserInput}
      />
      <ProductTable
      products={this.props.products}
      filterText={this.state.filterText}
      recentOnly={this.state.recentOnly}
      />
      </div>
      );
  }
});

var PRODUCTS = [
{category: 'Human Resources', price: '$490', recent: true, name: 'Employee Shift Scheduler', src:'share.png'},
{category: 'Human Resources', price: '$399', recent: true, name: 'Production Manager',src:'calc.png'},
{category: 'Human Resources', price: '$299', recent: false, name: 'Investment Calculator',src: 'code.png'},
{category: 'Production', price: '$99', recent: true, name: 'Data Sharing',src:'share.png'},
{category: 'Production', price: '$399', recent: false, name: 'Data Mining',src:'calc.png'},
{category: 'Production', price: '$199', recent: true, name: 'Data Visualization',src:'code.png'}
];


ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('content')
  );
