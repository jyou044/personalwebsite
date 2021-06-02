import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Contact.css';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './Contact.css';
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
  
export default function Contact() {
    const classes = useStyles();
    return (     
        <div className={classes.spacing}>
                <Grid item xs={12} container
                    direction="row"
                    justify="center"
                    alignItems="center">
                        <Typography variant="h2" align="left" gutterBottom>Contact Info</Typography>
                    </Grid>
                            <Grid item xs={12} container
                            direction="row"
                            justify="center"
                            alignItems="center" >
                                <Typography paragraph gutterBottom>Email: jasonyou026ix@gmail.com</Typography>
                            </Grid>
        </div>
    );
}

