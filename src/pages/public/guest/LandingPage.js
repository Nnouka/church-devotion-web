import React from 'react';
import * as TRANS from '../../../utils/trans/TranslationService';
import {connect} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LoginCard from "../../../components/auth/LoginCard";
import {primary, white} from "../../../utils/AppColors";
import logo from "../../../logos/logo-mini.png";
import LanguageChanger from "../../../components/lang/LanguageChanger";
import LoadingBar from "react-redux-loading";
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
        marginTop: 80,
    }
}));

function LandingPage(props){
    const {currentLang} = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <LoadingBar style={{backgroundColor: primary}}/>
            <LanguageChanger />
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12} sm={12} md={6}>
                    <div className="center">
                        <h1 className='text-center' style={{color: primary}}>{`${TRANS.trans('app_name', currentLang)}`}</h1>
                    </div>
                    <div className="center">
                        <h3 className='text-center' style={{color: primary}}>{`${TRANS.trans('public_gist', currentLang)}`}</h3>
                    </div>
                    <div className="center" >
                        <div className="text-center">
                            <img src={logo} width={100} alt="logo" />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <LoginCard />
                </Grid>
            </Grid>
        </div>
    );
}

function mapStateToProps({currentLang}, props) {
    return {
        currentLang,
        ...props
    }
}
export default connect(mapStateToProps)(LandingPage);