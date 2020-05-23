import React, {Component} from 'react';
import PublicHeader from './PublicHeader';
import LoginCard from './LoginCard';

class LoginPage extends Component {
    render() {
        const {lang, onLogin} = this.props;
        return (
            <div>
                <PublicHeader active={{route: '/login'}} lang={lang}/>
                <LoginCard lang={lang} onLogin={onLogin}/>
            </div>
        );
    }
}

export default LoginPage;