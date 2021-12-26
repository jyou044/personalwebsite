/*
* Code written by: Jason You 
*/
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Photos1 } from './Photos1';
import './About.css';
import SocialFollow from '../About/SocialFollow';
import Slider from './Slider';

const useStyles = makeStyles((theme) => ({
    spacing: {
        marginBottom: '1rem',
    },
    imageSpace: {
        marginTop: '10rem',
        marginBottom: '10rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paraFormat: {
        marginBottom: '1rem',
        color: theme.palette.text.primary,
        lineHeight: 2.5,
        textAlign: 'center',
    },
    meFormat: {
        textAlign: 'center',
    },
    slides: {
        Photos1,
    },
    flexVal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.5rem',
    },
}));

export default function About({ slides }) {
    const classes = useStyles();
    return (
        <div>
            <Grid item container className={classes.flexVal}>
                <Grid item xs={12} md={3} className={classes.paraFormat} style={{ marginBottom: 20 }}>
                    <Typography variant="h5" align="center" gutterBottom><b>My Profiles</b></Typography>
                    <SocialFollow />
                    <img className={classes.meFormat}
                        alt="Jason You"
                        height="300"
                        src={`${process.env.PUBLIC_URL}/source/jasonyouprofile.jpg`}
                        title="It's me!"
                    />
                </Grid>
                <Grid item xs={12} md={3} className={classes.paraFormat} style={{ paddingleft: 10, paddingRight: 10 }}>
                    <Typography variant="h2" align="center" gutterBottom><b>I'm Jason</b></Typography>
                    <p> <b>I'm a 3rd year software engineering student at the University of Ottawa.
                        From a young age, I have been fascinated with the field of Information Technology and it's applications. <br /> <br />As I made evident in my home page, I am an avid admirer of Steve Jobs and truly believe that simplicity is the ultimate sophistication!
                        <br /><br />During my spare time, I'll tune into a Jays game or go outside with my Cannon DSLR camera to take some pictures. Below are some photos I have taken!
                    </b></p>
                </Grid>
            </Grid>

            <Grid item container className={classes.imageSpace}>
                <Grid item xs={12} md={4} style={{ marginLeft: 15, marginRight: 15 }}>
                    <Slider slides={Photos1} />
                </Grid>
            </Grid>
        </div>
    );
}