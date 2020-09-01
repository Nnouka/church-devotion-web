import React, {Component} from "react";
import {connect} from 'react-redux';
import LoginPage from "./LoginPage";

export default function (RequireAuthComponent, intendedUrl = '/dashboard') {
    class Authenticator extends Component {
        render() {
            const {authState} = this.props;
            return (
                <div>
                    {
                        authState
                            ? <RequireAuthComponent {...this.props} />
                            : <LoginPage intendedUrl={intendedUrl} />
                    }
                </div>
            );
        }
    }
    function mapStateToProps({authState}, props) {
        return {
            authState,
            ...props
        }
    }
    return connect(mapStateToProps)(Authenticator);
}