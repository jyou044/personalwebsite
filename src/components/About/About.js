import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Photos from '../About/Photos';
import './About.css';
import SocialFollow from '../About/SocialFollow';
import Image from '../About/Image';
import Pdf from '../../components/About/Resume_JasonYou.pdf';
import PictureAsPDF from '@material-ui/icons/PictureAsPdf';
const useStyles = makeStyles((theme) => ({
    textFormat: {
      marginBottom: '1rem',
      color: theme.palette.text.primary,
      lineHeight: 2.6,
      textAlign: 'center',
    },
    centerFormat: {
        textAlign: 'center',
    },
    spacing: {
        marginBottom: '1 rem',
    },
    paraFormat: {
        marginBottom: '1rem',
        color: theme.palette.text.primary,
        lineHeight: 2.6,
        textAlign: 'left',
    },
    resumeColor: {
        color: 'black',
        textAlign: 'center',
        marginBottom: '1rem',
      },
      pdfColor: {
        color: 'red',
        textAlign: 'center',
        marginBottom: '1rem',
    },
  }));
  
export default function About() {
    const classes = useStyles();
    return (     
            <div>
                <Grid item container>
                    <Grid item xs={12} xl={3}></Grid>
                    <Grid item xs={12} xl={3} className={classes.textFormat}>
                    <Typography variant="h2" align="center" gutterBottom>Hi, I'm Jason</Typography>
                        <Image />
                        <SocialFollow />
                        <Typography variant="h5" align="center" gutterBottom><b>Download Resume</b></Typography>
                        <a href= {Pdf}  target="_blank" rel="noreferrer"> <PictureAsPDF className={classes.pdfColor} style={{ fontSize: 50 }}/></a>
                    </Grid>
                    <Grid item xs={12} xl={3} className={classes.paraFormat}>
                    <Typography variant="h2" align="center" className={classes.spacing} gutterBottom> </Typography>
                    <p> <b>I'm a 3rd year software engineering student at the University of Ottawa.
                            From a young age, I have been fascinated with the field of Information Technology and it's applications. I am interested in UI/UX design and web development. <br /> <br />As I made evident in my home page, I am an avid admirer of Steve Jobs and truly believe that simplicity is the ultimate sophistication!
                            <br /><br />I'm also a hobbyist photographer and baseball! I've been rooting for the Toronto Bluejays 
                            ever since I was in grade 4. During my spare time, I'll tune into a Jays game or go outside with my Cannon DSLR camera to take some pictures. </b></p>
                    </Grid>
                    <Grid item xs={12} xl={12} className={classes.centerFormat}>
                    <Typography variant="h2" align="center" gutterBottom>My Photos</Typography>
                    </Grid>
                    <Grid item xs={12} xl={12} className={classes.centerFormat}>
                        <Photos />
                    </Grid>

                    </Grid>
                </div>

    );
}

