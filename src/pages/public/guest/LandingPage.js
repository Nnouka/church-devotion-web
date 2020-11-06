import React from 'react';
import * as TRANS from '../../../utils/trans/TranslationService';
import {connect} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LoginCard from "../../../components/auth/LoginCard";
import {primary, white} from "../../../utils/AppColors";
import logo from "../../../logo.svg";
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

function LandingPage(props){
    const {currentLang} = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12} sm={12} md={6}>
                    <div className="center">
                        <h1 className='text-center' style={{color: primary}}>{`${TRANS.trans('app_name', currentLang)}`}</h1>
                    </div>
                    <div className="center">
                        <h3 className='text-center' style={{color: primary}}>{`${TRANS.trans('public_gist', currentLang)}`}</h3>
                    </div>
                    <div className="center">
                        <img src={logo} width={500} className="App-logo" alt="logo" />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <LoginCard />
                </Grid>
            </Grid>
        </div>
        /*<div>
            <div className="card center mt-50">
                <h1 className='text-center'>{`${TRANS.trans('welcome_text', currentLang)}`}</h1>
            </div>
        </div>*/
    );
}

function mapStateToProps({currentLang}, props) {
    return {
        currentLang,
        ...props
    }
}
export default connect(mapStateToProps)(LandingPage);