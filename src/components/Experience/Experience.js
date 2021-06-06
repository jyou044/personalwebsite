import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';
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
    heightVal: {
        backgroundSize: 'cover',
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
                <Grid item xs={12} md={12}></Grid>
                <Grid item xs={12} md={12} className={classes.textFormat}>
                <Typography variant="h2" align="center" className={classes.spacing} gutterBottom>My Journey into Tech</Typography>

                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid item xs={12} md={4} className={classes.textFormat} style={{padding: 20}}>
                        <img
                    alt="iriver"
                    height="200"
                        src={`${process.env.PUBLIC_URL}/source/iriver.jpg`} 
                    title="iriver" 
                />
                <Typography paragraph align="center" className={classes.spacing} gutterBottom><i>An iRiver MP3, one of the first electronic devices I used</i></Typography>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.paraFormat} style={{padding: 20}}> 
                        <p> <b>
                                                Technology has always been of the utmost interest to me. Ever since an early age, I was exposed to a variety of gadgets ranging from MP3 Players to iPods, primarily
                                                because of my dad's involvement in the field. 
                                                I still remember the first time I wrote a computer program when I was 11 years old. To this date, I am thankful that I was exposed to the world of programming
                                                and the many exciting opportunities that this field has to offer. 

                                            <br /><br />
                                                Since the end of my first year in university, I have had the privilege of completing several tech internships with various departments within the Government of Canada. From
                                                web development to client support, it's safe to say that I've garnered a holistic view of the world of tech in my 2 years of professional experience.
                                                Although I was exposed to some web development prior to the summer of 2021, it wasn't until I started using React JS and web technologies that I realized how much I loved
                                                designing websites. So much so, that I felt that it was absolutely necessary for me to challenge myself and create my first website. 
                                            
                                                <br /><br />
                                                I am always striving to challenge myself and am open to internship opportunities in both the private and public sectors. If the opportunity arises,
                                                I am readily available!
                                            </b>
                                            </p>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.textFormat} style={{padding: 20}}>
                        <img
                        alt="helloworld"
                        height="200"
                            src={`${process.env.PUBLIC_URL}/source/helloworld.png`} 
                        title="iriver" 
                    />
                    <Typography paragraph align="center" className={classes.spacing} gutterBottom><i>The classic "Hello World" program was one of the first lines of code I wrote</i></Typography>
                    </Grid>
            </Grid>
            <Grid container>
                    <Grid item xs={12} md={4}></Grid>
                    <Grid item xs={12} md={4} className={classes.textFormat}>
                    <Typography variant="h6" align="center" className={classes.spacing} gutterBottom>Computers have come a long way since the 90s! In this day and age, I believe that it is important that people are well informed
                    of technological advancements and uses of computers. </Typography>
                    </Grid>
                </Grid>
            <Grid container className={classes.videoFormat}>
                <Grid item xs={12} md={4}></Grid>
                    <Grid item xs={12} md={4} className={classes.videoFormat} style={{padding: 10}}> 
                        <ReactPlayer
                                url="https://www.youtube.com/watch?v=cczz9-tDPIY&ab_channel=IainFrameIainFrame"
                                className="react-player"
                                playing
                                width="100%"
                                height="100%"
                                controls={true}
                                />
                        </Grid>
                </Grid>
            </div>
        );
    }