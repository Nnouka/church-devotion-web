import React from 'react';
import logo from '../logo.svg';
import '../index.css';
import { Link } from 'react-router-dom';
import * as TRANS from '../utils/trans/TranslationService';
import * as AppUtils from '../utils/AppUtils';
export const MainHeader = (props) => {
    const {active, lang, onLogout} = props;
    return (
        <header className="guest-header">
            <ul>
                <li><img src={logo} style={{width: 100}} className="App-logo" alt="logo" /></li>
                <li className="guest-header-text">{TRANS.trans('welcome_text', lang)}</li>
                <li><Link to="/" className={`${active.route === '/' && 'active'}`}>{TRANS.trans('home', lang)}</Link></li>
                <div className="take-right">
                    <li><Link to="/dashboard" className={`${active.route === '/dashboard' && 'active'}`}>
                        {AppUtils.getUserDetails() === undefined || AppUtils.getUserDetails() === null ? '' : AppUtils.getUserDetails().fullName}
                        </Link>
                    </li>
                    <li>
                        <a href="#logout" className={`${active.route === '/logout' && 'active'}`} onClick={onLogout}>
                            {TRANS.trans('logout', lang)}
                        </a>
                    </li>
                </div>
            </ul>
        </header>
    );
}

export default MainHeader;