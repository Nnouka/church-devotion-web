import React, {Component} from 'react';
import * as TRANS from '../../utils/trans/TranslationService';
import serializeForm from 'form-serialize';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {handleSignUp} from "../../actions/user";

class LoginCard extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, {hash: true});
        const {dispatch, history, lang} = this.props;
        dispatch(handleSignUp(values, () =>
            history.push(`/login?m=${btoa(TRANS.trans('registration_success', lang))}`)));
    }
    render() {
        const {lang} = this.props;
        return (
            <div>
                <div className="card center mt-50">
                    <div className="card-container">
                        <h2 className="card-title">{`${TRANS.trans('sign_up', lang)}`}</h2>
                        <form onSubmit={(event) => this.handleSubmit(event)}>
                            <input type='text' name="fullName" placeholder={`${TRANS.trans('full_name', lang)}`}/>
                            <input type='email' name="email" placeholder={`${TRANS.trans('email', lang)}`}/>
                            <input type='password' name="password" placeholder={`${TRANS.trans('password', lang)}`}/>
                            <input type='text' name="phone" placeholder={`${TRANS.trans('phone_number', lang)}`}/>
                            <button type="submit">{`${TRANS.trans('login', lang)}`}</button>
                        </form>
                    </div>
                </div>
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

export default withRouter(connect(mapStateToProps)(LoginCard));