import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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
  }));

export default function SocialFollow() {
    const classes = useStyles();
    return (
        <div>
            <Grid item xs={12} container
            direction="row"
            justify="center"
            alignItems="center" className={classes.spacing}>
                <a href="https://github.com/jyou044" target="_blank" rel="noreferrer"><GitHubIcon className={classes.gitIcon} style={{ fontSize: 50 }} /></a>
                <a href="https://linkedin.com/in/jyou044" target="_blank" rel="noreferrer"> <LinkedInIcon className={classes.linkedInColor} style={{ fontSize: 50 }} /></a>
            </Grid>
        </div>
    );
}