import React, {Component} from 'react';
import * as TRANS from '../../utils/trans/TranslationService';
import {locale} from './locales';
import * as AppUtils from '../../utils/AppUtils';
import {connect} from 'react-redux';
import {setCurrentLang} from "../../actions/currentLang";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

class LanguageChanger extends Component {
    render() {
        const {dispatch, lang} = this.props;
        console.log("LanguageChanger", lang);
        return (
            <div style={{position: 'fixed', top: 100 + 'px', right: 20 + 'px', zIndex: 999}}>
                <span style={{color: lang === 'fr' ? 'gray' : 'lime', paddingRight: 5}}>EN</span>/
                <span style={{color: lang === 'en' ? 'gray' : 'lime', paddingLeft: 5}}>FR</span><br />
                <Switch onChange={(event) => {
                    dispatch(setCurrentLang(lang === 'en' ? 'fr' : 'en'));
                    AppUtils.setLocale(lang === 'en' ? 'fr' : 'en');
                }} style={{color: '#538a8a'}}/>
            {/*<select className="border-bottom-1-p"
            name="lang-select" 
            onChange={(event) => {
                }
            }
            defaultValue={'none'}>
                <option disabled value="none">{`${TRANS.trans('lang')}`}</option>
                {
                    locale.map((loc, index) => (
                    <option value={loc.name} key={`lang-${index}`}>{loc.display}</option>
                    ))
                }
            </select>*/}
            </div>
        );
    }
}
function mapStateToProps({currentLang}, props) {
    return {
        lang: currentLang,
        ...props
    }
}
export default connect(mapStateToProps)(LanguageChanger);