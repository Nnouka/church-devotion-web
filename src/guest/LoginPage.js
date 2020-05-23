import React, {Component} from 'react';
import PublicHeader from './PublicHeader';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <PublicHeader active={{route: '/login'}}/>
                Login Works...
            </div>
        );
    }
}

export default LoginPage;