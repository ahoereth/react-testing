import React from 'react';
import Footer from './footer';

export default class Products extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}
