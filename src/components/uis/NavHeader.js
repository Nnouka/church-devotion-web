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
import {Dashboard, ArrowRight, Home} from '@material-ui/icons';
import {Tooltip} from '@material-ui/core';
import {BASE, DASHBOARD, LOGIN, SIGN_UP} from "../../routes/webUri";

class NavHeader extends Component {
    render() {
        const {active, lang, dispatch, user, authState, history} = this.props;
        const logout = () => {
            AppUtils.logout();
            dispatch(setAuthState(false));
            dispatch(receiveAuthedUser(null));
            history.push('/');
        }
        return (
            <header className="guest-header">
                <ul>
                    {/*<li className="guest-header-text">{TRANS.trans('app_name', lang)}</li>*/}
                    <li><Link to={BASE} className={`${active.route === BASE && 'active'}`}>
                        <Tooltip title={TRANS.trans('home', lang)}>
                            <Home />
                        </Tooltip>

                    </Link></li>
                    <div className="take-right">
                        {
                            user !== null &&
                            <li>
                                <Link to={DASHBOARD} className={`${active.route === DASHBOARD && 'active'}`}>
                                <Tooltip title={user.fullName}>
                                    <Dashboard />
                                </Tooltip>
                            </Link>
                            </li>
                        }
                        {
                            authState &&
                            <li>
                                <div className="logout-div" onClick={() => logout()}>
                                    <Tooltip title={TRANS.trans('logout', lang)} >
                                        <ArrowRight />
                                    </Tooltip>
                                </div>
                            </li>
                        }
                    </div>
                    {
                        !authState &&
                        <div className="take-right">
                            <li><Link to={LOGIN} className={`${active.route === LOGIN && 'active'}`}>{TRANS.trans('login', lang)}</Link></li>
                            <li><Link to={SIGN_UP} className={`${active.route === SIGN_UP && 'active'}`}>{TRANS.trans('sign_up', lang)}</Link></li>
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
            route: activeRoute[activeRoute.length - 1]
        },
        ...props
    }
}
export default withRouter(connect(mapStateToProps)(NavHeader));