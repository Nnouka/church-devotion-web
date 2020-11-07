import React, {Component} from 'react';
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
import {FiLogOut} from 'react-icons/fi';

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
                    <li>
                        <Tooltip title={TRANS.trans('home', lang)}>
                            <Link to={BASE} className={`${active.route === BASE && 'active'}`}>
                                <Home />
                            </Link>
                        </Tooltip></li>
                    <div className="take-right">
                        {
                            user !== null &&
                            <li>
                                <Tooltip title={user.fullName}>
                                    <Link to={DASHBOARD} className={`${active.route === DASHBOARD && 'active'}`}>
                                        <Dashboard />
                                    </Link>
                                </Tooltip>
                            </li>
                        }
                        {
                            authState &&
                            <li>
                                <Tooltip title={TRANS.trans('logout', lang)} >
                                    <div className="logout-div" onClick={() => logout()}>
                                        <FiLogOut />
                                    </div>
                                </Tooltip>
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