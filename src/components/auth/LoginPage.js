import React, {Component} from 'react';
import LoginCard from './LoginCard';
import queryStr from "../../utils/queryStr";

class LoginPage extends Component {
    render() {
        const {intendedUrl, location} = this.props;
        const getRedirectUrl = () => intendedUrl || '/dashboard';
        const query = queryStr.parse(location.search);
        return (
            <div>
                <LoginCard
                    redirectUrl={getRedirectUrl()}
                    message={query.m}
                    regSuccess={query.r}
                />
            </div>
        );
    }
}

export default LoginPage;