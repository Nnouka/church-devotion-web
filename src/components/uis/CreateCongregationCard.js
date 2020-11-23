import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import * as TRANS from "../../utils/trans/TranslationService";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function CreateCongregationCard(props) {
    const classes = useStyles();
    const {currentLang} = props;

    return (
        <form className={classes.root} autoComplete="off">
            <TextField id="outlined-basic" label={
                `${TRANS.trans('congregation_name', currentLang)} (${TRANS.trans('required')})`
            } variant="outlined" required/>
            <Button>
                {TRANS.trans('create_congregation', currentLang)}
            </Button>
        </form>
    );
}

function mapStateToProps({currentLang}, props) {
    return {
        currentLang,
        ...props
    }
}
export default connect(mapStateToProps)(CreateCongregationCard);