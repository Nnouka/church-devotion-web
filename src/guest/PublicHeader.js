import React from 'react';
import logo from '../logo.svg';
import '../index.css';
import { Link } from 'react-router-dom';
export const PublicHeader = (props) => {
    const {active} = props;
    return (
        <header className="guest-header">
            <ul>
                <li><img src={logo} style={{width: 100}} className="App-logo" alt="logo" /></li>
                <li><Link to="/" className={`${active.route === '/' && 'active'}`}>Home</Link></li>
                <div className="take-right">
                    <li><Link to="/login" className={`${active.route === '/login' && 'active'}`}>Login</Link></li>
                    <li><Link to="/signup" className={`${active.route === '/signup' && 'active'}`}>Sign Up</Link></li>
                </div>
            </ul>
        </header>
    );
}

export default PublicHeader;