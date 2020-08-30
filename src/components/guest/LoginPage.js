import React, {Component} from 'react';
import PublicHeader from './PublicHeader';
import LoginCard from './LoginCard';
import {connect} from 'react-redux';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <PublicHeader active={{route: '/login'}} />
                <LoginCard history={this.props.history}/>
            </div>
        );
    }
}

export default LoginPage;