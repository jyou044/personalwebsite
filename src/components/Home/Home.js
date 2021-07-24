import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './Home.css';
import Image from '../Home/Image';
const useStyles = makeStyles((theme) => ({
    textFormat: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
    paraFormat: {
        marginBottom: '1rem',
        color: theme.palette.text.primary,
        lineHeight: 2.6,
        textAlign: 'center',
    },
    heightVal: {
        backgroundSize: 'cover',
    },
    flexVal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.5rem',
    },
}));

export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h2" align="center" className={classes.textFormat} gutterBottom><b>Jason You</b></Typography>
                </Grid>
            </Grid>

            <Grid container className={classes.flexVal}>
                <Grid item xs={12} md={3} align="center">
                    <Image />
                </Grid>
                <Grid item xs={12} md={3} className={classes.paraFormat} style={{ padding: 20 }}>
                    <h3 className={classes.textFormat}><b><i>"Simplicity is the ultimate sophistication" - Philosophy embraced by Steve Jobs and Apple</i></b></h3>
                </Grid>
            </Grid>

            <Grid container className={classes.flexVal}>
                <Grid item xs={12} md={4} className={classes.paraFormat} style={{ padding: 20 }}>
                    <p> <b>Hi there! Welcome to my portfolio website. I'm an aspiring software engineer with an interest in web development, UI/UX design, and project management.
                        Over the course of my professional career, I've worked on a variety of different projects ranging from websites to business intelligence reporting. I've interned
                        at reputable organizations such as the Department of National Defence and Employment and Social Development Canada. I'm incredibly passionate about programming.
                        Please feel free to explore my website to find out more about me! </b>
                    </p>
                </Grid>
            </Grid>
        </div>
    );
}