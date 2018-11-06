import React, {Component} from 'react';
import './Navbar.css';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" >Recipe App - React</a>
                        </div>
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a >New Recipe</a></li>
                            <li><a >Home</a></li>
                            <li><a >About</a></li>
                            <li><a >Contact Us</a></li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}