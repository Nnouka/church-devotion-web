import React, {Component} from 'react';
import PublicHeader from './PublicHeader';
import LoginCard from './LoginCard';
import {connect} from 'react-redux';

class LoginPage extends Component {
    render() {
        const {intendedUrl} = this.props;
        const getRedirectUrl = () => intendedUrl || '/dashboard';
        return (
            <div>
                <PublicHeader active={{route: '/login'}} />
                <LoginCard history={this.props.history} redirectUrl={getRedirectUrl()}/>
            </div>
        );
    }
}

export default LoginPage;