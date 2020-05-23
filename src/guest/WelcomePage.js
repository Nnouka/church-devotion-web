import React from 'react';
import PublicHeader from './PublicHeader';
import * as TRANS from '../utils/trans/TranslationService';

export const WelcomePage = (props) => {
    return (
        <div>
            <PublicHeader active={{route: '/'}}/>
            <div className="App-header">
                <h1>{`<${TRANS.trans('welcome_text', props.lang)}/>`}</h1>
            </div>
        </div>
    );
}