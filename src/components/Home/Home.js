import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './Home.css';
import Image from '../Home/Image';
import ReactPlayer from "react-player";
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
    videoFormat: {
        marginBottom: '1rem',
        textAlign: 'center',
    },
    heightVal: {
       backgroundSize: 'cover',
    },
  }));
  
  export default function Home() {
        const classes = useStyles();
        return (
            <div className="player-wrapper"> 
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h2" align="center" className={classes.textFormat} gutterBottom>Jason You</Typography>
                       
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5" className={classes.textFormat} gutterBottom>A portfolio showcasing my interests and work</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} md={3}></Grid>
                    <Grid item xs={12} md={3} className={classes.textFormat}>
                            <Image />                           
                        </Grid>
                    <Grid item xs={12} md={3} className={classes.paraFormat} style={{padding: 20}}>
                            <h3 className={classes.textFormat}><i>"Simplicity is the ultimate sophistication" - Steve Jobs</i></h3>
                            <p> <b>Hi there! Welcome to my portfolio website. I'm an aspiring software engineer with an interest in web development, UI/UX design, and project management.
                                Over the course of my professional career, I've worked on a variety of different projects ranging from websites to business intelligence reporting. I've interned 
                                with reputable organizations such as the Department of National Defence and Employment and Social Development Canada. I'm incredibly passionate about programming.
                                Please feel free to explore my website to find more about me! </b> 
                            </p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} md={4}></Grid>
                    <Grid item xs={12} md={4} classes={classes.textFormat}>
                        <Typography variant="h3" className={classes.textFormat} gutterBottom> A word from Steve Jobs</Typography>
                    </Grid>
                </Grid>
                <Grid container className={classes.videoFormat}>
                <Grid item xs={12} md={4}></Grid>
                    <Grid item xs={12} md={4} className={classes.videoFormat} style={{padding: 10}}> 
                        <ReactPlayer
                                url="https://www.youtube.com/watch?v=kYfNvmF0Bqw"
                                className="react-player"
                                width="100%"
                                height="100%"
                                controls={true}
                                />
                        </Grid>
                </Grid>
            </div>
        );
    }