import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WelcomePage from "../pages/public/guest/WelcomePage";
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

class NavigationGraph extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(setAuthState(getAuthState()));
        dispatch(receiveAuthedUser(getUserDetails()));
        dispatch(setCurrentLang(getLocale()));
    }

    render() {
        const {dispatch, authed} = this.props;
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
                            path='/'
                            render={
                                () => {
                                    handleSetActiveRoute('/');
                                    return authed ? <WelcomePage /> : <LoginPage />
                                }
                            }
                        />
                        <Route
                            exact
                            path='/login'
                            render={(props) => {
                                handleSetActiveRoute('/login');
                                return <LoginPage {...props}/>;
                            }} />
                        <Route
                            exact
                            path='/dashboard'
                            render={
                                () => {
                                    handleSetActiveRoute('/dashboard');
                                    return <DashBoard />
                                }
                            } />
                        <Route
                            exact
                            path='/signup'
                            render={
                                (props) => {
                                    handleSetActiveRoute('/signup');
                                    return <SignUpPage {...props} />
                                }
                            } />
                        <Route component={_404} />
                    </Switch>
                </Container>
            </Router>
        );
    }
}
function mapStateToProps({authState}, props) {
    return {
        authed: authState,
        ...props
    }
}
export default connect(mapStateToProps)(NavigationGraph);