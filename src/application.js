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
        <a href={"products/" + this.props.id}>
            <h4 className="applicationName">
                {this.props.name}
            </h4>
        </a>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
        <div className="screenshot">
        <a href={"products/" + this.props.id}>
        <img alt="{this.props.name}" src={this.props.imageUrl} />
        </a>
        </div>
        </div>
        );
    }
}
