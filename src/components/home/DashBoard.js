import React, {Component} from 'react';
import MainHeader from './MainHeader';
import * as TRANS from '../../utils/trans/TranslationService';
import {connect} from "react-redux";

class DashBoard extends Component {
    render() {
        const {lang, onLogout, user, authState} = this.props;
        return (
            <div>
                <MainHeader lang={lang} active={{route: '/dashboard'}} onLogout={onLogout}/>
                <div className="mt-50">
                    {`<${TRANS.trans('cnt_contact', lang)}/>`}
                </div>
                <div className="mt-50">
                    {`<${TRANS.trans('welcome', lang)} ${user === undefined ||
                    user === null ? '' : user.fullName}>`}
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
export default connect(mapStateToProps)(DashBoard);