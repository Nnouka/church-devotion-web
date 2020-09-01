import React, {Component} from 'react';
import * as TRANS from '../../utils/trans/TranslationService';
import serializeForm from 'form-serialize';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {handleLogin} from "../../actions/user";
import queryStr from "../../utils/queryStr";

class LoginCard extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, {hash: true});
        const {dispatch, history, redirectUrl} = this.props;
        dispatch(handleLogin(values, () => history.push(redirectUrl)));
    }
    render() {
        const {lang} = this.props;
        const message = queryStr.decode(this.props.message);
        console.log(btoa("Here i am to worship").toString());
        return (
            <div>
                <div className="card center mt-50">
                    {
                        message !== undefined &&
                        <div className='alert-success'>
                            {message}
                        </div>
                    }
                    <div className="card-container">
                        <h2 className="card-title">{`${TRANS.trans('login', lang)}`}</h2>
                        <form onSubmit={(event) => this.handleSubmit(event)}>
                            <input type='text' name="username" placeholder={`${TRANS.trans('email', lang)}`}/>
                            <input type='password' name="password" placeholder={`${TRANS.trans('password', lang)}`}/>
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