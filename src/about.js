import React from 'react';
import Jumbotron from './jumbotron';
import Footer from './footer';

export default class About extends React.Component {
    render() {
        return (
            <div>
            <Jumbotron/>
            <h1>About Solarlux</h1>
            We are a data-driven organization, excelling at providing services to clients.
            <Footer/>
            </div>);
    }
}
