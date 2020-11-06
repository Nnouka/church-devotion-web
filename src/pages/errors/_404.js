import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as TRANS from '../../utils/trans/TranslationService';

const _404 = (props) => {
    const {lang} = props;
    return (
        <div className="card center mt-50">
            <h1 className='card-title'>{TRANS.trans('page_not_found', lang)}</h1>
            <p className="alert-danger text-center">
                {TRANS.trans('page_not_found_text', lang)}! <br /> <Link to='/'>{TRANS.trans('back_to_church', lang)}</Link>
            </p>
        </div>
    )
}

function mapStateToProps({currentLang}, props) {
    return {
        lang: currentLang,
        ...props
    }
}
export default connect(mapStateToProps)(_404);