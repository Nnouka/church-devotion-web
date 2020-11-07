import React from 'react';
import * as TRANS from '../../utils/trans/TranslationService';
import serializeForm from 'form-serialize';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { receiveAuthedUser} from "../../actions/user";
import queryStr from "../../utils/queryStr";
import LoadingBar, {hideLoading, showLoading} from "react-redux-loading";
import {login} from "../../api/LoginAPI";
import {setAuthState} from "../../actions/authState";
import {btn, input} from "../common/Styles";
import {lime, primary, white} from "../../utils/AppColors";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import CloseIcon from '@material-ui/icons/Close';
import SignUpCard from "./SignUpCard";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
const useStyles = makeStyles((theme) => ({
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
}));
function LoginCard(props) {
    const [open, setOpen] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState(null);
    const classes = useStyles();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const renderSignup = () => {
        return (
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullScreen>
                <DialogTitle id="form-dialog-title">
                    <div className='text-center' style={{color: primary, fontSize: 24}}>{`${TRANS.trans('app_name', lang)}`}</div>
                    <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent style={{marginTop: 20}}>
                    <SignUpCard onDialogClose={() => handleClose()}/>
                </DialogContent>
            </Dialog>
        );
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, {hash: true});
        const {dispatch, history, redirectUrl} = props;
        // show loading
        dispatch(showLoading());
        // login
        login(values).then(
            res => {
                dispatch(setAuthState(true));
                dispatch(receiveAuthedUser(res))
                setErrorMsg(null);
                dispatch(hideLoading());
                history.push(redirectUrl);
            }
        ).catch(error => {
            console.log(error);
            if (error.code !== undefined) {
                setErrorMsg(error.code);
            } else {
                setErrorMsg('network_error');
            }
            dispatch(hideLoading());
        });
    }

    const {lang, regSuccess} = props;
    const message = queryStr.decode(props.message);
    return (
        <div>
            <div className="card center" style={{backgroundColor: white}}>
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
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <input style={input} type='text' name="username" placeholder={`${TRANS.trans('email', lang)}`}/>
                        <input style={input} type='password' name="password" placeholder={`${TRANS.trans('password', lang)}`}/>
                        <button type="submit" style={{...btn, backgroundColor: primary, color: white}}>{`${TRANS.trans('login', lang)}`}</button>
                    </form>
                    <br />
                    <hr />
                    <button type="button"
                            style={{...btn, backgroundColor: lime, color: white}}
                            onClick={handleClickOpen}
                    >{`${TRANS.trans('sign_up', lang)}`}</button>
                    {
                        renderSignup()
                    }
                </div>
            </div>
        </div>
    );
}

function mapStateToProps({currentLang}, props) {
    return {
        lang: currentLang,
        ...props
    }
}

export default withRouter(connect(mapStateToProps)(LoginCard));