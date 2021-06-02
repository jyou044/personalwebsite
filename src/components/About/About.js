import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './About.css';
import CardMedia from '@material-ui/core/CardMedia';
import SocialFollow from '../About/SocialFollow';
import Image from '../About/Image';
import Pdf from '../../components/About/Resume_JasonYou.pdf';
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
  
export default function About() {
    const classes = useStyles();
    return (     
        <div>
                <Grid item xs={12} container
                    direction="row"
                    justify="center"
                    alignItems="center">
                        <Typography variant="h2" align="center" gutterBottom>Hi, I'm Jason</Typography>
                    </Grid>

                    <div class="row">
                            <Grid item xs={12} container
                            direction="row"
                            justify="center"
                            alignItems="center" >
                                <SocialFollow />
                                <Image />
                            </Grid>
                            
                    </div>

                    <Grid Container spacing={2} className={classes.textFormat} >
                            <Grid item xs={12}>
                                    <p> <b>I'm a 3rd year software engineering student at the University of Ottawa.
                                    From a young age, I have been fascinated with the field of Information Technology and it's applications. I am interested in UI/UX design and web development. <br /> <br />As I made evident in my home page, I am an avid admirer of Steve Jobs and truly believe that simplicity is the ultimate sophistication!
                                    <br /><br />I'm also a hobbyist photographer and baseball! I've been rooting for the Toronto Bluejays 
                                    ever since I was in grade 4. During my spare time, I'll tune into a Jays game or go outside with my Cannon DSLR camera to take some pictures. </b></p>
                                    <div>
                                    <a href = {Pdf} target = "_blank" rel="noreferrer" font size="300" style={{ textDecoration: 'none' }}>Download Resume</a>
                                    </div>
                                <CardMedia
                                    component="img"
                                    alt="Waves"
                                    height="140"
                                    src={`${process.env.PUBLIC_URL}/background.jpg`} 
                                    title="Waves"
                                    />
                            </Grid>    
                    </Grid>
        </div>
    );
}

