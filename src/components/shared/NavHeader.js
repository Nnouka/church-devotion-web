import React, {Component} from 'react';
import logo from '../../logo.svg';
import '../../index.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as TRANS from '../../utils/trans/TranslationService';
import * as AppUtils from '../../utils/AppUtils';
import {setAuthState} from "../../actions/authState";
import {receiveAuthedUser} from "../../actions/user";
import {withRouter} from 'react-router-dom';
class NavHeader extends Component {
    render() {
        const {active, lang, dispatch, user, authState, history} = this.props;
        const logout = () => {
            AppUtils.logout();
            dispatch(setAuthState(false));
            dispatch(receiveAuthedUser(null));
            history.push('/login');
        }
        return (
            <header className="guest-header">
                <ul>
                    <li><img src={logo} style={{width: 100}} className="App-logo" alt="logo" /></li>
                    <li className="guest-header-text">{TRANS.trans('app_name', lang)}</li>
                    <li><Link to="/" className={`${active.route === '/' && 'active'}`}>{TRANS.trans('home', lang)}</Link></li>
                    <div className="take-right">
                        {
                            user !== null &&
                            <li><Link to="/dashboard" className={`${active.route === '/dashboard' && 'active'}`}>
                                {user.fullName}
                            </Link>
                            </li>
                        }
                        {
                            authState &&
                            <li>
                                <a href="#logout" className={`${active.route === '/logout' && 'active'}`} onClick={() => logout()}>
                                    {TRANS.trans('logout', lang)}
                                </a>
                            </li>
                        }
                    </div>
                    {
                        !authState &&
                        <div className="take-right">
                            <li><Link to="/login" className={`${active.route === '/login' && 'active'}`}>{TRANS.trans('login', lang)}</Link></li>
                            <li><Link to="/signup" className={`${active.route === '/signup' && 'active'}`}>{TRANS.trans('sign_up', lang)}</Link></li>
                        </div>

                    }
                </ul>
            </header>
        );
    }
}
function mapStateToProps({currentLang, user, authState, activeRoute}, props) {
    return {
        lang: currentLang,
        user,
        authState,
        active: {
            route: activeRoute
        },
        ...props
    }
}
export default withRouter(connect(mapStateToProps)(NavHeader));