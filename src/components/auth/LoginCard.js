import React, {Component} from 'react';
import * as TRANS from '../../utils/trans/TranslationService';
import serializeForm from 'form-serialize';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {handleLogin, receiveAuthedUser} from "../../actions/user";
import queryStr from "../../utils/queryStr";
import {hideLoading, showLoading} from "react-redux-loading";
import {login} from "../../api/LoginAPI";
import {setAuthState} from "../../actions/authState";
import {btn, input} from "../common/Styles";

class LoginCard extends Component {
    state = {
        errorMsg: null
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, {hash: true});
        const {dispatch, history, redirectUrl} = this.props;
        // show loading
        dispatch(showLoading());
        // login
        login(values).then(
            res => {
                dispatch(setAuthState(true));
                dispatch(receiveAuthedUser(res))
                this.setState(() => ({errorMsg: null}));
                dispatch(hideLoading());
                history.push(redirectUrl);
            }
        ).catch(error => {
            console.log(error);
            if (error.code !== undefined) {
                this.setState(() => ({errorMsg: error.code}));
            } else {
                this.setState(() => ({errorMsg: 'network_error'}))
            }
            dispatch(hideLoading());
        });
        // dispatch(handleLogin(values, () => history.push(redirectUrl)));
    }
    render() {
        const {lang} = this.props;
        const message = queryStr.decode(this.props.message);
        const regSuccess= this.props.regSuccess;
        const {errorMsg} = this.state;
        return (
            <div>
                <div className="card center mt-50">
                    {
                        message !== undefined &&
                        <div className='alert-success text-center'>
                            {message}
                        </div>
                    }
                    {
                        regSuccess !== undefined &&
                        <div className='alert-success text-center'>
                            {TRANS.trans(regSuccess, lang)}
                        </div>
                    }
                    {
                        errorMsg !== null &&
                        <div className='alert-danger text-center'>
                            {TRANS.trans(errorMsg, lang)}
                        </div>
                    }
                    <div className="card-container">
                        <h2 className="card-title">{`${TRANS.trans('login', lang)}`}</h2>
                        <form onSubmit={(event) => this.handleSubmit(event)}>
                            <input style={input} type='text' name="username" placeholder={`${TRANS.trans('email', lang)}`}/>
                            <input style={input} type='password' name="password" placeholder={`${TRANS.trans('password', lang)}`}/>
                            <button type="submit" style={btn}>{`${TRANS.trans('login', lang)}`}</button>
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