import React, {Component} from 'react';
import * as TRANS from '../../utils/trans/TranslationService';
import {connect} from "react-redux";
import authenticator from '../../components/higher_order/Authenticator';
class DashBoard extends Component {
    render() {
        const {lang, user} = this.props;
        return (
            <div className='card center mt-50'>
                <div className="card-title">
                    {`${TRANS.trans('welcome', lang)} ${user === undefined ||
                    user === null ? '' : user.fullName}`}
                </div>
                <div className="text-center">
                    {`${TRANS.trans('login_gist', lang)}`}
                </div>
            </div>
        );
    }
}
function mapStateToProps({currentLang, user, authState}, props) {
    return {
        lang: currentLang,
        user,
        authState,
        ...props
    }
}
export default authenticator(connect(mapStateToProps)(DashBoard));