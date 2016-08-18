import React from 'react';
import Remarkable from 'remarkable';


export default class Application extends React.Component {

  rawMarkup() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());

    return { __html: rawMarkup };
  }

  render() {
    return (<div className="application">
      <h3 className="applicationName">
      {this.props.name}
      </h3>
      <span dangerouslySetInnerHTML={this.rawMarkup()} />
      <div className="screenshot">
      <a href='#'><img src= {this.props.imageUrl} /></a>
      </div>
      </div>);
  }
}
