import React, {Component} from 'react';
import * as TRANS from '../utils/trans/TranslationService';
import serializeForm from 'form-serialize';
import * as app from '../utils/AppService'

class LoginCard extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, {hash: true});
        console.log(values);
        if (this.props.onLogin) {
            app.login(values, this.props.onLogin);
        }

    }
    render() {
        const {lang} = this.props.lang;
        return (
            <div>
            <div className="card center mt-50">
                <div className="card-container">
                    <h2 className="card-title">{`${TRANS.trans('login', lang)}`}</h2>
                    <form onSubmit={this.handleSubmit}>
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

export default LoginCard;