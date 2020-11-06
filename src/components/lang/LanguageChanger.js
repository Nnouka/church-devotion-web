import React, {Component} from 'react';
import * as AppUtils from '../../utils/AppUtils';
import {connect} from 'react-redux';
import {setCurrentLang} from "../../actions/currentLang";
import Switch from "@material-ui/core/Switch";
import {secondaryBg} from "../../utils/AppColors";

class LanguageChanger extends Component {
    render() {
        const {dispatch, lang} = this.props;
        return (
            <div style={{position: 'fixed', top: 70, right: 20, zIndex: 999}}>
                <span style={{color: lang === 'fr' ? 'gray' : 'lime', paddingRight: 5}}>EN</span>/
                <span style={{color: lang === 'en' ? 'gray' : 'lime', paddingLeft: 5}}>FR</span><br />
                <Switch onChange={(event) => {
                    dispatch(setCurrentLang(lang === 'en' ? 'fr' : 'en'));
                    AppUtils.setLocale(lang === 'en' ? 'fr' : 'en');
                }} style={{color: secondaryBg}} color={"default"} checked={lang === 'fr'}/>
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