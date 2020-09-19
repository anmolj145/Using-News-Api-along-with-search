import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        display:"inline-block",
        margin:10,
        height:350,
        backgroundColor: "#f2f2f2"
    },
});

export default function ImgMediaCard(props) {

    const classes = useStyles();

    return (
        <Card className={classes.root} key={props.data.publishedAt}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.data.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.data.description}
                    </Typography>
                    {props.data.author ? 
                        <>
                            <hr/>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Author - {props.data.author}
                            </Typography>
                        </> : null 
                    }
                </CardContent>
            </CardActionArea>
        </Card>
    );
}