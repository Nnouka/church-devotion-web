import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WelcomePage from "../guest/WelcomePage";
import LoginPage from "../auth/LoginPage";
import DashBoard from "../home/DashBoard";
import {connect} from 'react-redux';
import {receiveAuthedUser} from "../../actions/user";
import {getAuthState, getLocale, getUserDetails} from "../../utils/AppUtils";
import {setAuthState} from "../../actions/authState";
import {Container} from '@material-ui/core';
import NavHeader from "./NavHeader";
import {setActiveRoute} from "../../actions/activeRoute";
import {setCurrentLang} from "../../actions/currentLang";
import _404 from "../errors/_404";

class NavigationGraph extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(setAuthState(getAuthState()));
        dispatch(receiveAuthedUser(getUserDetails()));
        dispatch(setCurrentLang(getLocale()));
    }

    render() {
        const {dispatch} = this.props;
        const handleSetActiveRoute = (route) => dispatch(setActiveRoute(route));
        return (
            <Router>
                <NavHeader />
                <Container>
                    <Switch>
                        <Route
                            exact
                            path='/'
                            render={
                                () => {
                                    handleSetActiveRoute('/');
                                    return <WelcomePage />
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
                        <Route component={_404} />
                    </Switch>
                </Container>
            </Router>
        );
    }
}

export default connect()(NavigationGraph);