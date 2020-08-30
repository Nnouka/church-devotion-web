import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WelcomePage from "../guest/WelcomePage";
import LoginPage from "../guest/LoginPage";
import DashBoard from "../home/DashBoard";

class NavigationGraph extends Component {
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

export default NavigationGraph;