import React, {Component} from 'react';
import LoginCard from '../../../components/auth/LoginCard';
import queryStr from "../../../utils/queryStr";
import {primary} from "../../../utils/AppColors";
import * as TRANS from "../../../utils/trans/TranslationService";
import logo from "../../../logos/logo-mini.png";
import {connect} from 'react-redux';
import LoadingBar from "react-redux-loading";

class LoginPage extends Component {
    render() {
        const {intendedUrl, location, currentLang, history, authed, popTo} = this.props;
        const getRedirectUrl = () => intendedUrl || '/dashboard';
        const search = location !== undefined ? location.search : '';
        const query = queryStr.parse(search);
        if (authed) {
            history.push(popTo);
        }
        return (
            <div style={{overflowY: "hidden", paddingBottom: 30}}>
                <LoadingBar style={{backgroundColor: primary}}/>
                <div className="center">
                    <h1 className='text-center' style={{color: primary}}>{`${TRANS.trans('app_name', currentLang)}`}</h1>
                </div>
                <div className="center">
                    <h3 className='text-center' style={{color: primary}}>{`${TRANS.trans('public_gist', currentLang)}`}</h3>
                </div>
                <div className="center" >
                    <div className="text-center">
                        <img src={logo} width={100} alt="logo" />
                    </div>
                </div>
                <LoginCard
                    redirectUrl={getRedirectUrl()}
                    message={query.m}
                    regSuccess={query.r}
                />
            </div>
        );
    }
}

function mapStateToProps({authState, currentLang, activeRoute}, props) {
    return {
        authed: authState,
        popTo: activeRoute[activeRoute.length > 1 ? activeRoute.length - 2 : activeRoute.length - 1],
        currentLang,
        ...props
    }
}
export default connect(mapStateToProps)(LoginPage);