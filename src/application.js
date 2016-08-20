import React from 'react';
import Remarkable from 'remarkable';


export default class Application extends React.Component {

  rawMarkup() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
}

render() {

    return (
        <div className="application">
        <h4 className="applicationName">
        {this.props.name}
        </h4>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
        <div className="screenshot">
        <a href={"products/" + this.props.id}>
        <img src={this.props.imageUrl} />
        </a>
        </div>
        </div>
        );
    }
}
