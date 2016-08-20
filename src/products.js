import React from 'react';

export default class Products extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
