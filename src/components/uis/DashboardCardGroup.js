import React from 'react';
import CustomCard from "../commons/CustomCard";
import {FaDesktop, FaDatabase, FaChartLine} from 'react-icons/fa';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import {makeStyles} from "@material-ui/core/styles";
function DashboardCardGroup(props) {
    const classes = useStyles();
    return (
        <Container className={classes.container} style={{justifyContent: "space-between"}}>
            <CustomCard  renderIcon={() => <FaDesktop style={{color: 'orangered'}}/>}
                        title="Dashboard"
                        text="Explore the data with our interactive dashboard"
                        learnMoreRef="dashboard"
            />
            <CustomCard renderIcon={() => <FaDatabase style={{color: 'orangered'}}/>}
                        title="Data"
                        text="Download political violence and protest data"
                        learnMoreRef="data"
                />
            <CustomCard
                renderIcon={() => <FaChartLine style={{color: 'orangered'}} />}
                title="Analysis"
                text="View Analysis of violence and protest data"
                learnMoreRef="analysis"
            />
        </Container>

    );
}
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },

}));
export default DashboardCardGroup;