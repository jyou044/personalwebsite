import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
                <Grid container>
                    <Grid item xs={12}  container direction="row"
                    justify="center"
                    alignItems="center">
                        <Typography variant="h2" align="center" className={classes.textFormat} gutterBottom>Jason You</Typography>
                    </Grid>

                    <Grid item xs={12} container direction="row"
                    justify="center"
                    alignItems="center">
                        <Typography variant="h5" className={classes.textFormat} gutterBottom>A portfolio showcasing my interests and work</Typography>
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