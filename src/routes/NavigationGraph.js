import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WelcomePage from "../pages/home/WelcomePage";
import LoginPage from "../pages/public/auth/LoginPage";
import DashBoard from "../pages/home/DashBoard";
import {connect} from 'react-redux';
import {receiveAuthedUser} from "../actions/user";
import {getAuthState, getLocale, getUserDetails} from "../utils/AppUtils";
import {setAuthState} from "../actions/authState";
import {Container} from '@material-ui/core';
import NavHeader from "../components/uis/NavHeader";
import {setActiveRoute} from "../actions/activeRoute";
import {setCurrentLang} from "../actions/currentLang";
import _404 from "../pages/errors/_404";
import SignUpPage from "../pages/public/auth/SignUpPage";
import AppBarWithSearch from "../components/uis/AppBarWithSearch";
import LandingPage from "../pages/public/guest/LandingPage";
import {BASE, DASHBOARD, LOGIN, SETTINGS, SIGN_UP} from "./webUri";
import SettingsDrawer from "./SettingsDrawer";

function NavigationGraph (props) {
    useEffect(
        () => {
            const {dispatch} = props;
            dispatch(setAuthState(getAuthState()));
            dispatch(receiveAuthedUser(getUserDetails()));
            dispatch(setCurrentLang(getLocale()));
        }
    );

    const {dispatch, authed} = props;
    const handleSetActiveRoute = (route) => dispatch(setActiveRoute(route));
    return (
        <Router>
            {
                authed &&
                <AppBarWithSearch >
                    <NavHeader />
                </AppBarWithSearch>
            }
            <Container>
                <Switch>
                    <Route
                        exact
                        path={BASE}
                        render={
                            () => {
                                handleSetActiveRoute(BASE);
                                return authed ? <WelcomePage /> : <LandingPage />
                            }
                        }
                    />
                    <Route
                        exact
                        path={LOGIN}
                        render={(props) => {
                            handleSetActiveRoute(LOGIN);
                            return <LoginPage {...props}/>;
                        }} />
                    <Route
                        exact
                        path={DASHBOARD}
                        render={
                            () => {
                                handleSetActiveRoute(DASHBOARD);
                                return <DashBoard />
                            }
                        } />
                    <Route
                        exact
                        path={SIGN_UP}
                        render={
                            (props) => {
                                handleSetActiveRoute(SIGN_UP);
                                return <SignUpPage {...props} />
                            }
                        } />
                    <Route
                        exact
                        path={SETTINGS}
                        render={
                            (props) => {
                                handleSetActiveRoute(SETTINGS);
                                return <SettingsDrawer {...props} />
                            }
                        } />
                    <Route component={_404} />
                </Switch>
            </Container>
        </Router>
    );
}
function mapStateToProps({authState}, props) {
    return {
        authed: authState,
        ...props
    }
}
export default connect(mapStateToProps)(NavigationGraph);