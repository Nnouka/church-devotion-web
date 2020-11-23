import React from 'react';
import * as TRANS from '../utils/trans/TranslationService';
import {connect} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {white} from "../utils/AppColors";
import {withRouter} from 'react-router-dom';
import {ArrowBack, Dashboard, People} from '@material-ui/icons';
import {popRoute} from "../actions/activeRoute";
import {BASE, CREATE, CREATE_CONGREGATION, DASHBOARD} from "./webUri";

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

function CreationDashboard(props){
    const {currentLang, history, dispatch, popTo} = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3} >
                <Grid item xs={12} sm={12} md={12}>
                    <div className="settings-menu-item">
                        <ArrowBack style={{color: white}} onClick={() => {
                            dispatch(popRoute());
                            if (popTo === CREATE) {
                                history.push(BASE);
                            } else {
                                history.push(popTo);
                            }
                        }} />
                    </div>
                    <div className="settings-menu-title">{TRANS.trans('create', currentLang)}</div>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <div className={`settings-menu ${popTo === CREATE_CONGREGATION ? 'active': ''}`} onClick={() => {
                        history.push(CREATE_CONGREGATION);
                    }}>
                        <div className="settings-menu-item">
                            <People style={{color: white}} onClick={() => {
                                history.push(CREATE_CONGREGATION);
                            }} />
                        </div>
                        <div className="settings-menu-text">{TRANS.trans('congregation', currentLang)}</div>
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
export default withRouter(connect(mapStateToProps)(CreationDashboard));