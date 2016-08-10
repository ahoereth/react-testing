import React from 'react';
import ReactDOM from 'react-dom';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

class Jumbo extends React.Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-default" role="navigation">
            <div className="navbar-header">

            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Solarlux Apps</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Type A<strong className="caret"></strong></a>
                    <ul className="dropdown-menu">
                        <li>
                            <a href="#">Action</a>
                        </li>
                        <li>
                            <a href="#">Another action</a>
                        </li>
                        <li>
                        <a href="#">Something else here</a>
                        </li>
                        <li className="divider">
                        </li>
                        <li>
                            <a href="#">Separated link</a>
                        </li>
                        <li className="divider">
                        </li>
                        <li>
                            <a href="#">One more separated link</a>
                        </li>
                    </ul>

            </li>
            <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Type B<strong className="caret"></strong></a>
            <ul className="dropdown-menu">
            <li>
            <a href="#">Action</a>
            </li>
            <li>
            <a href="#">Another action</a>
            </li>
            <li>
            <a href="#">Something else here</a>
            </li>
            <li className="divider">
            </li>
            <li>
            <a href="#">Separated link</a>
            </li>
            <li className="divider">
            </li>
            <li>
            <a href="#">One more separated link</a>
            </li>
            </ul>
            </li>
            <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Type C<strong className="caret"></strong></a>
            <ul className="dropdown-menu">
            <li>
            <a href="#">Action</a>
            </li>
            <li>
            <a href="#">Another action</a>
            </li>
            <li>
            <a href="#">Something else here</a>
            </li>
            <li className="divider">
            </li>
            <li>
            <a href="#">Separated link</a>
            </li>
            <li className="divider">
            </li>
            <li>
            <a href="#">One more separated link</a>
            </li>
            </ul>
            </li>
            </ul>
            <form className="navbar-form navbar-left" role="search">
            <div className="form-group">
            <input type="text" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-default">
            Submit
            </button>
            </form>
            <ul className="nav navbar-nav navbar-right">
            <li>
            <a href="#">Create an Account</a>
            </li>
            <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Profile<strong className="caret"></strong></a>
            <ul className="dropdown-menu">
            <li>
            <a href="#">My products</a>
            </li>
            <li>
            <a href="#">Another action</a>
            </li>
            <li>
            <a href="#">Updates</a>
            </li>
            <li className="divider">
            </li>
            <li>
            <a href="#">Logout</a>
            </li>
            </ul>
            </li>
            </ul>
            </div>
            </nav>
            <Jumbotron>
            <h1>Solarlux Web Apps</h1>
            <p>Enjoy our amazing products</p>
            </Jumbotron>
            </div>
            )
}
}


ReactDOM.render(<Jumbo/>, document.getElementById('header'));
