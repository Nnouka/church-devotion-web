import React from 'react';
import logo from '../../logo.svg';
import '../../index.css';
import { Link } from 'react-router-dom';
import * as TRANS from '../../utils/trans/TranslationService';
import {connect} from 'react-redux';
export const PublicHeader = (props) => {
    const {active, lang} = props;
    return (
        <header className="guest-header">
            <ul>
                <li><img src={logo} style={{width: 100}} className="App-logo" alt="logo" /></li>
                <li className="guest-header-text">{TRANS.trans('welcome_text', lang)}</li>
                <li><Link to="/" className={`${active.route === '/' && 'active'}`}>{TRANS.trans('home', lang)}</Link></li>
                <div className="take-right">
                    <li><Link to="/login" className={`${active.route === '/login' && 'active'}`}>{TRANS.trans('login', lang)}</Link></li>
                    <li><Link to="/signup" className={`${active.route === '/signup' && 'active'}`}>{TRANS.trans('sign_up', lang)}</Link></li>
                </div>
            </ul>
        </header>
    );
}

function mapStateToProps({currentLang}, props) {
    return {
        lang: currentLang,
        ...props
    }
}
export default connect(mapStateToProps)(PublicHeader);