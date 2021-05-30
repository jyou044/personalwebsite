import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './About.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function About() {
    const classes = useStyles();
        return (
            
            <div>
                <Grid container spacing ={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>Hi, I'm Jason</Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }

