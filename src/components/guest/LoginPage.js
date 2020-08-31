import React, {Component} from 'react';
import LoginCard from './LoginCard';

class LoginPage extends Component {
    render() {
        const {intendedUrl} = this.props;
        const getRedirectUrl = () => intendedUrl || '/dashboard';
        return (
            <div>
                <LoginCard redirectUrl={getRedirectUrl()}/>
            </div>
        );
    }
}

export default LoginPage;