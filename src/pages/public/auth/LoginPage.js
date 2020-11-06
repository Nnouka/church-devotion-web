import React, {Component} from 'react';
import LoginCard from '../../../components/auth/LoginCard';
import queryStr from "../../../utils/queryStr";

class LoginPage extends Component {
    render() {
        const {intendedUrl, location} = this.props;
        const getRedirectUrl = () => intendedUrl || '/dashboard';
        const search = location !== undefined ? location.search : '';
        const query = queryStr.parse(search);
        return (
            <div className="mt-50">
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