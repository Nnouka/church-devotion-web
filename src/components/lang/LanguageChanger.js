import React, {Component} from 'react';
import * as AppUtils from '../../utils/AppUtils';
import {connect} from 'react-redux';
import {setCurrentLang} from "../../actions/currentLang";
import Switch from "@material-ui/core/Switch";
import {primary, secondaryBg} from "../../utils/AppColors";

class LanguageChanger extends Component {
    render() {
        const {dispatch, lang, hPlacement, offsetY} = this.props;
        return (
            <div style={{position: hPlacement || 'absolute', top: offsetY || 40, right: 20, zIndex: 999}}>
                <div className="take-left" style={{marginTop: 5}}><span style={{color: lang === 'fr' ? 'gray' : primary, paddingRight: 5}}>EN</span></div>
                <Switch className="take-left" onChange={(event) => {
                    dispatch(setCurrentLang(lang === 'en' ? 'fr' : 'en'));
                    AppUtils.setLocale(lang === 'en' ? 'fr' : 'en');
                }} style={{color: secondaryBg}} color={"default"} checked={lang === 'fr'}/>
                <div className="take-left" style={{marginTop: 5}}><span style={{color: lang === 'en' ? 'gray' : primary, paddingLeft: 5}}>FR</span></div>
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