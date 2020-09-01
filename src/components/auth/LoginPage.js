import React, {Component} from 'react';
import LoginCard from './LoginCard';
import queryStr from "../../utils/queryStr";

class LoginPage extends Component {
    render() {
        const {intendedUrl, location} = this.props;
        const getRedirectUrl = () => intendedUrl || '/dashboard';
        return (
            <div>
                <LoginCard redirectUrl={getRedirectUrl()} message={queryStr.parse(location.search).m}/>
            </div>
        );
    }
}

export default LoginPage;