import React from 'react';

export default class Jumbotron extends React.Component {
    render() {
        return(
            <div className="jumbotron">
            <div className="container">
            <h1 className="display-3">Solarlux Apps</h1>
            <p className="lead">Enjoy our amazing products.</p>
            <p><a className="btn btn-primary btn-md" href="#" role="button">Learn more &raquo;</a></p>
            </div>
            </div>
            )
    }
}
