import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WelcomePage from "../guest/WelcomePage";
import LoginPage from "../guest/LoginPage";
import DashBoard from "../home/DashBoard";
import {connect} from 'react-redux';
import {receiveAuthedUser} from "../../actions/user";
import {getAuthState, getUserDetails} from "../../utils/AppUtils";
import {setAuthState} from "../../actions/authState";

class NavigationGraph extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(setAuthState(getAuthState()));
        dispatch(receiveAuthedUser(getUserDetails()));
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={WelcomePage}/>
                    <Route exact path='/login' render={({history}) => <LoginPage history={history}/> } />
                    <Route exact path='/dashboard' component={DashBoard} />
                </Switch>
            </Router>
        );
    }
}

export default connect()(NavigationGraph);