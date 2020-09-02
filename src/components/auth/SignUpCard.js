import React, {Component} from 'react';
import * as TRANS from '../../utils/trans/TranslationService';
import serializeForm from 'form-serialize';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {handleSignUp} from "../../actions/user";
import {hideLoading, showLoading} from "react-redux-loading";
import {registerUser} from "../../api/SignUpAPI";

class LoginCard extends Component {
    state = {
        errorMsg: null
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, {hash: true});
        const {dispatch, history, lang} = this.props;
        dispatch(showLoading());
        registerUser(values).then(
            () => {
                this.setState(() => ({errorMsg: null}));
                history.push(`/login?m=${btoa(TRANS.trans('registration_success', lang))}`);
                dispatch(hideLoading());
            }
        ).catch(
           error => {
               if (error.code !== undefined) {
                   this.setState(() => ({errorMsg: error.code}));
               } else {
                   this.setState(() => ({errorMsg: 'network_error'}))
               }
               dispatch(hideLoading());
           }
        )
    }
    render() {
        const {lang} = this.props;
        const {errorMsg} = this.state;
        return (
            <div>
                <div className="card center mt-50">
                    {
                        errorMsg !== null &&
                        <div className='alert-danger text-center'>
                            {TRANS.trans(errorMsg, lang)}
                        </div>
                    }
                    <div className="card-container">
                        <h2 className="card-title">{`${TRANS.trans('sign_up', lang)}`}</h2>
                        <form onSubmit={(event) => this.handleSubmit(event)}>
                            <input type='text' name="fullName" placeholder={`${TRANS.trans('full_name', lang)}`}/>
                            <input type='email' name="email" placeholder={`${TRANS.trans('email', lang)}`}/>
                            <input type='password' name="password" placeholder={`${TRANS.trans('password', lang)}`}/>
                            <input type='text' name="phone" placeholder={`${TRANS.trans('phone_number', lang)}`}/>
                            <button type="submit">{`${TRANS.trans('sign_up', lang)}`}</button>
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