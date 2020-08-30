import React, {Component} from 'react';
import PublicHeader from './PublicHeader';
import * as TRANS from '../../utils/trans/TranslationService';
import {connect} from 'react-redux';

class WelcomePage extends Component{
    render() {
        const {currentLang} = this.props;
        console.log("Welcome", currentLang);
        return (
            <div>
                <PublicHeader active={{route: '/'}}/>
                <div className="App-header">
                    <h1>{`${TRANS.trans('welcome_text', currentLang)}`}</h1>
                </div>
            </div>
        );
    }
}

function mapStateToProps({currentLang}, props) {
    return {
        currentLang,
        ...props
    }
}
export default connect(mapStateToProps)(WelcomePage);