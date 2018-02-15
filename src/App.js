import React from 'react';
import { NavLink } from 'react-router-dom'
import Routes, { ADD_LINK , HOME} from './components/Routes';
import logo from './static/images/autodesk-logo.png';
import './App.css';

export default (props) => {
    return (
        <div>
            <header>
                <div className="logo">
                    <img src={logo} alt="Autoddit"/>
                    <span>AUTODDIT</span>
                </div>
                <nav>
                    <NavLink exact to={HOME} activeClassName="active">Home</NavLink>
                    <NavLink exact activeClassName="active" to={ADD_LINK}>Add Link</NavLink>
                </nav>
            </header>

            <main>
                <Routes/>
            </main>
        </div>
    );
}
