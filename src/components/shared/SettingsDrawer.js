import React from 'react';
import * as TRANS from '../../utils/trans/TranslationService';
import {connect} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {primary, white} from "../../utils/AppColors";
import logo from "../../logo.svg";
import {withRouter} from 'react-router-dom';
import {ArrowBack, Home, Dashboard} from '@material-ui/icons';
import {popRoute} from "../../actions/activeRoute";
import {BASE, DASHBOARD} from "../../routes/webUri";
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
    return (
        <div className={classes.root}>
            <Grid container spacing={3} >
                <Grid item xs={12} sm={12} md={12}>
                    <div className="settings-menu-item">
                        <ArrowBack style={{color: white}} onClick={() => {
                            dispatch(popRoute());
                            history.push(popTo);
                        }} />
                    </div>
                    <div className="settings-menu-title">{TRANS.trans('setting_n_links', currentLang)}</div>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <div className="settings-menu">
                        <div className="settings-menu-item" onClick={() => {
                            history.push(BASE);
                        }}>
                            <Home style={{color: white}} onClick={() => {
                                history.push(BASE);
                            }} />
                        </div>
                        <div className="settings-menu-text">{TRANS.trans('home', currentLang)}</div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <div className="settings-menu">
                        <div className="settings-menu-item" onClick={() => {
                            history.push(DASHBOARD);
                        }}>
                            <Dashboard style={{color: white}} onClick={() => {
                                history.push(DASHBOARD);
                            }} />
                        </div>
                        <div className="settings-menu-text">{TRANS.trans('dashboard', currentLang)}</div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

function mapStateToProps({currentLang, activeRoute}, props) {
    return {
        currentLang,
        popTo: activeRoute[0],
        ...props
    }
}
export default withRouter(connect(mapStateToProps)(SettingsDrawer));