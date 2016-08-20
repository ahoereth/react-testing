import React from 'react';
import Jumbotron from './jumbotron';
import Footer from './footer';

export default class Contact extends React.Component {
    render() {
        return (
            <div>
            <Jumbotron/>
            <h1>Contact us</h1>
            Phone: 123-456-7890
            <p/>
            Silicon Drive 1<br/>
            Osnabrueck, Germany
            <Footer/>
            </div>
            );
    }
}
