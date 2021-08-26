/*
* Code written by: Jason You 
*/
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './Experience.css';

const useStyles = makeStyles((theme) => ({
    textFormat: {
        marginBottom: '1rem',
        textAlign: 'center',
        color: theme.palette.text.primary,
        lineHeight: 2.6,
    },
    spacing: {
        marginBottom: '1rem',
    },
    paraFormat: {
        marginBottom: '1rem',
        color: theme.palette.text.primary,
        lineHeight: 2.6,
        textAlign: 'center',
    },
    pictureFormat: {
        marginBottom: '1rem',
        textAlign: 'center',
    },
}));

export default function Experience() {
    const classes = useStyles();
    return (
        <div>
            <Grid item container>
                <Grid item xs={12} md={12} className={classes.textFormat}>
                    <Typography variant="h2" align="center" className={classes.spacing} gutterBottom><b>My Journey into Tech</b></Typography>
                </Grid>
            </Grid>

            <Grid container className={classes.pictureFormat}>
                <Grid item xs={12} md={4} className={classes.pictureFormat} style={{ padding: 20 }}>
                    <img
                        alt="iriver"
                        height="200"
                        src={`${process.env.PUBLIC_URL}/source/iriver.jpg`}
                        title="iriver"
                    />
                    <Typography paragraph align="center" className={classes.spacing} gutterBottom><i>An iRiver MP3, one of the first electronic devices I used</i></Typography>
                </Grid>
                <Grid item xs={12} md={4} className={classes.paraFormat} style={{ padding: 20 }}>
                    <p> <b>
                        Technology has always been of the utmost interest to me. Ever since an early age, I was exposed to a variety of gadgets ranging from MP3 Players to iPods, primarily
                        because of my dad's involvement in the field.
                        I still remember the first time I wrote a computer program when I was 11 years old.
                        <br />
                        Since the end of my first year in university, I have had the privilege of completing several tech internships with various departments within the Government of Canada. From
                        web development to client support, it's safe to say that I've garnered a holistic view of the world of tech in my 2 years of professional experience.
                        <br />
                        I am always striving to challenge myself and am open to internship opportunities in both the private and public sectors. If the opportunity arises,
                        I am readily available!
                    </b>
                    </p>
                </Grid>
                <Grid item xs={12} md={4} className={classes.pictureFormat} style={{ padding: 20 }}>
                    <img
                        alt="helloworld"
                        height="200"
                        width="266"
                        src={`${process.env.PUBLIC_URL}/source/helloworld.png`}
                        title="Hello World"
                    />
                    <Typography paragraph align="center" className={classes.spacing} gutterBottom><i>The classic "Hello World" program was one of the first lines of code I wrote</i></Typography>
                </Grid>
            </Grid>
        </div>
    );
}