import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
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
  }));

export default function Experience() {
    const classes = useStyles();
        return (
            <div>
                <Paper elevation={3}>
                    <Grid item xs={12} container
                    direction="row"
                    justify="center"
                    alignItems="center">
                        <Typography variant="h2" align="center" className={classes.textFormat} gutterBottom>My Story</Typography>
                    </Grid>
                    <div class="row">
                            <Grid item xs={12} container
                            direction="row"
                            justify="center"
                            alignItems="center" >
                            </Grid>
                    </div>

                    <Grid Container spacing={2} className={classes.textFormat} >
                            <Grid item xs={12}>
                                    <p> <b>
                                        Technology has always been of the utmost interest to me. Ever since an early age, I was exposed to a variety of gadgets ranging from MP3 Players to iPods, primarily
                                        because of my dad's involvement in the field. 
                                   
                                    <br /><br />
                                        I still remember the first time I wrote a computer program when I was 11 years old. To this date, I am thankful that I was exposed to the world of programming
                                        and the many exciting opportunities that this field has to offer. 

                                    <br /><br />
                                        Since the end of my first year in university, I have had the privilege of completing several tech internships with various departments within the Government of Canada. From
                                        web development to client support, it's safe to say that I've garnered a holistic view of the world of tech in my 2 years of professional experience.
                                    
                                    <br /><br />
                                        Although I was exposed to some web development prior to the summer of 2021, it wasn't until I started using React JS and web technologies that I realized how much I loved
                                        designing websites. So much so, that I felt that it was absolutely necessary for me to challenge myself and create my first website. 
                                    
                                        <br /><br />
                                        Whatever challenges are ahead of me, I'm ready to take on. What I've learnt throughout my experiences programming is that perseverance is key to success in this field.
                                        <br /><br />
                                        Let's face it, I've had my fair share of failures, receiving rejection after rejection from companies. But what I've come to realize is that it's better to be prepared for an 
                                        opportunity that doesn't come, then not be prepared when an opportunity comes!
                                     </b>
                                    </p>
                                    
                                    <CardMedia
                                    component="img"
                                    alt="Waves"
                                    height="140"
                                    src={`${process.env.PUBLIC_URL}/background.jpg`} 
                                    title="Waves"
                                    />
                            </Grid>    
                    </Grid>
                </Paper>
            </div>
            
        );
    }