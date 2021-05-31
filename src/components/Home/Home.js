import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Home.css';
const useStyles = makeStyles((theme) => ({
    textFormat: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
  }));
  
  export default function Home() {
        const classes = useStyles();
        return (
            
            <div>
                <Grid container spacing ={3}>
                    <Grid item xs={12}  container direction="row"
                    justify="center"
                    alignItems="center">
                        <h1 className={classes.textFormat}>Jason You</h1>
                    </Grid>

                    <Grid item xs={12} container direction="row"
                    justify="center"
                    alignItems="center">
                        <h2 className={classes.textFormat}>A portfolio showcasing my interests and work</h2>
                    </Grid>

                    <Grid item xs={12} container direction="row"
                    justify="center"
                    alignItems="center">
                        <img className="img-fluid" 
                        src={`${process.env.PUBLIC_URL}/creative.jpg`} 
                        alt="Creativity"/>
                    </Grid>

                    <Grid item xs={12}  container direction="row"
                    justify="center"
                    alignItems="center">
                        <h3 className={classes.textFormat}><i>"Simplicity is the ultimate sophistication" - Steve Jobs</i></h3>
                        
                    </Grid>
                </Grid>
            </div>
        );
    }