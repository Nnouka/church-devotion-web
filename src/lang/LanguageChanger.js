import React, {Component} from 'react';
import * as TRANS from '../utils/trans/TranslationService';
import {locale} from '../lang/locales';
import * as AppUtils from '../utils/AppUtils';

class LanguageChanger extends Component {
    render() {
        const {onLanguageChanged} = this.props;
        return (
            <div style={{position: 'fixed', top: 50, right: 20, zIndex: 999}}>
            <select className="border-bottom-1-p"
            name="lang-select" 
            onChange={(event) => {
                const val = event.target.value;
                onLanguageChanged(val);
                AppUtils.setLocale(val)}
            }
            defaultValue={AppUtils.getLocale()}>
                <option disabled value="none">{`${TRANS.trans('lang')}`}</option>
                {
                    locale.map((loc, index) => (
                    <option value={loc.name} key={`lang-${index}`}>{loc.display}</option>
                    ))
                }
            </select>
            </div>
        );
    }
}

export default LanguageChanger;