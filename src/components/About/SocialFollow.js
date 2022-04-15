/*
* Code written by: Jason You 
*/
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PictureAsPDF from '@material-ui/icons/PictureAsPdf';

const useStyles = makeStyles((theme) => ({
  spacing: {
    marginBottom: '1rem',
  },
  gitIcon: {
    color: 'black',
  },
  linkedInColor: {
    color: '#007efb',
  },
  pdfColor: {
    color: 'red',
    textAlign: 'center',
  },
}));

export default function SocialFollow() {
  const classes = useStyles();
  return (
    <div>
      <Grid item xs={12} container
        direction="row"
        justifyContent="center"
        alignItems="center">
        <a href="https://github.com/jyou044" target="_blank" rel="noreferrer"><GitHubIcon className={classes.gitIcon} style={{ fontSize: 50 }} /></a>
        <a href="https://linkedin.com/in/jyou044" target="_blank" rel="noreferrer"> <LinkedInIcon className={classes.linkedInColor} style={{ fontSize: 50 }} /></a>
      </Grid>

      <Grid item xs={12} container
        direction="row"
        justifyContent="center"
        alignItems="center">
        <h3>Resume<br /></h3>
      </Grid>

      <Grid item xs={12} container
        direction="row"
        justifyContent="center"
        alignItems="center"><a href={`${process.env.PUBLIC_URL}/Resume.pdf`} target="_blank" rel="noreferrer" className={classes.spacing}> <PictureAsPDF className={classes.pdfColor} style={{ fontSize: 50 }} /></a></Grid>
    </div>
  );
}