    // var React = require('react');
    // var ReactDOM = require('ReactDOM');

var Jumbotron = require('react-bootstrap/lib/Jumbotron');
// import Jumbotron from 'react-bootstrap/lib/Jumbotron';


const jumbotronInstance = (
    <Jumbotron>
    <h1>Hello, world!</h1>
    <p>This is a simple hero unit.</p>
    </Jumbotron>
);

ReactDOM.render(
    jumbotronInstance,
    document.getElementById('app')
    );

// ReactDOM.render(
//     <h1>The man</h1>,
//     document.getElementById('app')
//     );
