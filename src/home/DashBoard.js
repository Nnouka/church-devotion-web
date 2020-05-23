import React, {Component} from 'react';
import MainHeader from './MainHeader';
import * as TRANS from '../utils/trans/TranslationService';
import * as AppUtils from '../utils/AppUtils';

class DashBoard extends Component {
    render() {
        const {lang, onLogout} = this.props;
        return (
            <div>
                <MainHeader lang={lang} active={{route: '/dashboard'}} onLogout={onLogout}/>
                <div className="mt-50">
                    {`<${TRANS.trans('cnt_contact', lang)}/>`}
                </div>
                <div className="mt-50">
                    {`<${TRANS.trans('welcome')} ${AppUtils.getUserDetails() === undefined ||
                    AppUtils.getUserDetails() === null ? '' : AppUtils.getUserDetails().fullName}>`}
                </div>
            </div>
        );
    }
}

export default DashBoard;