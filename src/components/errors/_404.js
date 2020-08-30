import React from 'react';
import { Link } from 'react-router-dom';
import * as TRANS from '../../utils/trans/TranslationService';

const _404 = (props) => {
    const {lang} = props;
    return (
        <div className="App-header">
            <h1>{TRANS.trans('page_not_found', lang)}</h1>
            <p className="alert-danger">
                {TRANS.trans('page_not_found_text', lang)}! <br /> <Link to='/'>{TRANS.trans('back_to_church', lang)}</Link>
            </p>
        </div>
    )
}

export default _404;