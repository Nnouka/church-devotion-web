import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from "@material-ui/core/CardHeader";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        margin: 10,
        borderRadius: 0
    },
});

function CustomCard({renderIcon, title, text, learnMoreRef, ...props}) {
    const classes = useStyles();
    const onLearnMoreClick = () => {
        const {history} = props;
        if (learnMoreRef !== undefined) {
            history && history.push(learnMoreRef);
        }
    }
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" >
                        {
                            renderIcon && renderIcon()
                        }
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {
                learnMoreRef &&
                <CardActions >
                    <Button size="small" color="primary" onClick={onLearnMoreClick} style={{margin:'auto'}}>
                        Learn More
                    </Button>
                </CardActions>
            }
        </Card>
    );
}

export default withRouter(CustomCard);