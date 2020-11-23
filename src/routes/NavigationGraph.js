import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WelcomePage from "../pages/home/WelcomePage";
import LoginPage from "../pages/public/auth/LoginPage";
import DashBoard from "../pages/home/DashBoard";
import {connect} from 'react-redux';
import {receiveAuthedUser} from "../actions/user";
import {
    getAuthState,
    getCountriesFromStorage,
    getLocale,
    getUserDetails,
    setCountriesInStorage
} from "../utils/AppUtils";
import {setAuthState} from "../actions/authState";
import {Container} from '@material-ui/core';
import NavHeader from "../components/uis/NavHeader";
import {setActiveRoute} from "../actions/activeRoute";
import {setCurrentLang} from "../actions/currentLang";
import _404 from "../pages/errors/_404";
import SignUpPage from "../pages/public/auth/SignUpPage";
import AppBarWithSearch from "../components/uis/AppBarWithSearch";
import LandingPage from "../pages/public/guest/LandingPage";
import {BASE, CREATE, DASHBOARD, LOGIN, SETTINGS, SIGN_UP} from "./webUri";
import SettingsDrawer from "./SettingsDrawer";
import {loadCountriesFromApi} from "../api/PublicAPI";
import {setCountries} from "../actions/countries";
import CreationDashboard from "./CreationDashboard";

function NavigationGraph (props) {
    const {dispatch, authed} = props;
    useEffect(
        () => {
            // load countries
            let countries = getCountriesFromStorage();
            if (countries === null) {
                loadCountriesFromApi().then(
                    them => {
                        countries = them;
                        setCountriesInStorage(countries);
                        dispatch(setCountries(countries));
                    }
                );
            } else {
                dispatch(setCountries(countries));
            }
            dispatch(setAuthState(getAuthState()));
            dispatch(receiveAuthedUser(getUserDetails()));
            dispatch(setCurrentLang(getLocale()));
        }
    );
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
                            return <LoginPage {...props} />;
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
                    <Route
                        exact
                        path={CREATE}
                        render={
                            (props) => {
                                handleSetActiveRoute(CREATE);
                                return <CreationDashboard {...props} />
                            }
                        } />
                    <Route component={_404} />
                </Switch>
            </Container>
        </Router>
    );
}
function mapStateToProps({authState, currentLang}, props) {
    return {
        authed: authState,
        currentLang,
        ...props
    }
}
export default connect(mapStateToProps)(NavigationGraph);