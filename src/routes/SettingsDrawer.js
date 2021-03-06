import React from 'react';
import * as TRANS from '../utils/trans/TranslationService';
import {connect} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {white} from "../utils/AppColors";
import {withRouter} from 'react-router-dom';
import {ArrowBack, Home, Dashboard, Add} from '@material-ui/icons';
import {popRoute} from "../actions/activeRoute";
import {BASE, CREATE, DASHBOARD, SETTINGS} from "./webUri";
import * as AppUtils from "../utils/AppUtils";
import {setAuthState} from "../actions/authState";
import {receiveAuthedUser} from "../actions/user";
import {FiLogOut} from 'react-icons/fi';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        paddingBottom: 100,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    container: {
        marginTop: 120,
    }
}));

function SettingsDrawer(props){
    const {currentLang, activeRoute, history, dispatch, popTo} = props;
    const classes = useStyles();
    const logout = () => {
        AppUtils.logout();
        dispatch(setAuthState(false));
        dispatch(receiveAuthedUser(null));
        history.push(BASE);
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={3} >
                <Grid item xs={12} sm={12} md={12}>
                    <div className="settings-menu-item">
                        <ArrowBack style={{color: white}} onClick={() => {
                            dispatch(popRoute());
                            if (popTo === SETTINGS) {
                                history.push(BASE);
                            } else {
                                history.push(popTo);
                            }
                        }} />
                    </div>
                    <div className="settings-menu-title">{TRANS.trans('setting_n_links', currentLang)}</div>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <div className={`settings-menu ${popTo === BASE ? 'active': ''}`} onClick={() => {
                        history.push(BASE);
                    }}>
                        <div className="settings-menu-item">
                            <Home style={{color: white}} onClick={() => {
                                history.push(BASE);
                            }} />
                        </div>
                        <div className="settings-menu-text">{TRANS.trans('home', currentLang)}</div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <div className={`settings-menu ${popTo === DASHBOARD ? 'active': ''}`} onClick={() => {
                        history.push(DASHBOARD);
                    }}>
                        <div className="settings-menu-item">
                            <Dashboard style={{color: white}} onClick={() => {
                                history.push(DASHBOARD);
                            }} />
                        </div>
                        <div className="settings-menu-text">{TRANS.trans('dashboard', currentLang)}</div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <div className={`settings-menu ${popTo === CREATE ? 'active': ''}`} onClick={() => {
                        history.push(CREATE);
                    }}>
                        <div className="settings-menu-item">
                            <Add style={{color: white}} onClick={() => {
                                history.push(CREATE);
                            }} />
                        </div>
                        <div className="settings-menu-text">{TRANS.trans('create', currentLang)}</div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <div className="settings-menu-item">
                        <FiLogOut style={{color: white}} onClick={() => {
                            logout()
                        }} />
                    </div>
                    <div className="settings-menu-title">{TRANS.trans('logout', currentLang)}</div>
                </Grid>
            </Grid>
        </div>
    );
}

function mapStateToProps({currentLang, activeRoute}, props) {
    return {
        currentLang,
        popTo: activeRoute[activeRoute.length > 1 ? activeRoute.length - 2 : activeRoute.length - 1],
        ...props
    }
}
export default withRouter(connect(mapStateToProps)(SettingsDrawer));