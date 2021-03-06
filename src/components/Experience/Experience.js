/*
* Code written by: Jason You 
*/
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player'
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
        marginLeft: '1rem',
        marginRight: '1rem',
    },
    paraFormat: {
        marginBottom: '1rem',
        paddingLeft: 10,
        paddingRight: 10,
        color: theme.palette.text.primary,
        lineHeight: 2.6,
        textAlign: 'center',
    },
    pictureFormat: {
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: '1rem',
        marginLeft: '1rem',
        marginRight: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
    },
    videoFormat: {
        marginBottom: '1rem',
        textAlign: 'center',
    },
}));

export default function Experience() {
    const classes = useStyles();
    return (
        <div>
            <Grid item container>
                <Grid item xs={12} className={classes.textFormat}>
                    <Typography variant="h2" align="center" className={classes.spacing} gutterBottom><b>My Story</b></Typography>
                </Grid>
            </Grid>

            <Grid container justifyContent = "center">
                <Grid item alignContent='flex-start' alignItems='flex-start' justifyContent ='flex-start' container lg className={classes.pictureFormat}> 
                    <img
                        alt="iriver"
                        height="300"
                        src={`${process.env.PUBLIC_URL}/source/iriver.jpg`}
                        title="iriver"
                    />
                    <Typography paragraph align="center" className={classes.spacing} gutterBottom><i>Shown in the picture is an iRiver MP3, one of the first electronic devices I used</i></Typography>
                </Grid>
                <Grid item alignContent='flex-start' alignItems='flex-start' justifyContent ='flex-start' container lg className={classes.paraFormat} style={{ padding: 20 }}>
                    <p> <b>
                        Technology has always been of the utmost interest to me. Ever since an early age, I was exposed to a variety of gadgets ranging from MP3 Players to iPods, primarily
                        because of my family's involvement in the field.
                        I still remember the first time I wrote a computer program when I was 11 years old.
                        <br /> <br />
                        Since the end of my first year in university, I have had the privilege of completing several tech internships with various organizations in both the public and private sectors. From
                        web development to QA automation, it's safe to say that I've garnered a holistic view of the world of tech in my 2 years of professional experience.
                        <br /> <br />
                        I am always striving to challenge myself and am open to internship opportunities in both the private and public sectors. If the opportunity arises,
                        I am readily available!
                    </b>
                    </p>
                </Grid>
                <Grid item alignContent='flex-start' alignItems='flex-start' justifyContent ='flex-start' container lg className={classes.pictureFormat}>
                    <img
                        alt="helloworld"
                        height="200"
                        src={`${process.env.PUBLIC_URL}/source/helloworld.png`}
                        title="Hello World"
                    />
                    <Typography paragraph align="center" className={classes.spacing} gutterBottom><i>The "Hello World" program was one of the first lines of code I wrote</i></Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent ="center" stype={{paddingBottom: 10}}>
                <Grid item className={classes.pictureFormat}>
                    <ReactPlayer  
                        alt="Maze Game"
                        url="https://www.youtube.com/watch?v=jm5wbTU3lYk&ab_channel=bagelboi360"
                        className="react-player"
                                playing={false}
                                muted={true}
                                width="100%"
                                height="500"
                                controls={true}
                                config={{ youtube: { playerVars: { origin: 'https://www.youtube.com' } } }}
                                />
                        <Typography paragraph align="center" className={classes.spacing} gutterBottom><i>Above is a demonstration of a maze game I developed in high school, one of the first major projects I worked on.</i></Typography>
                </Grid>
            </Grid>
        </div>
    );
}