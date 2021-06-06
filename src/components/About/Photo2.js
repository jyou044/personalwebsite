
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
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
        marginBottom: '1rem',
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
export default function Photos2() {
    const classes = useStyles();
return (

    <div className={classes.spacing}>
<Grid item className={classes.paraFormat}>
    <div className={classes.centerFormat}>
    <img 
                    alt="Niagara Falls"
                    height="200"
                    src={`${process.env.PUBLIC_URL}/source/photos2_1.jpg`} 
                    title="Niagara Falls" 
                />
    </div>
    </Grid>
    <Grid item className={classes.paraFormat}>
    <div className={classes.centerFormat}>
    <img 
                    alt="Brooklyn"
                    height="200"
                    src={`${process.env.PUBLIC_URL}/source/photos2_2.jpg`} 
                    title="Brooklyn" 
                />
    </div>
    </Grid>
    <Grid item className={classes.paraFormat}>
    <div className={classes.centerFormat}>
    <img 
                    alt="New York"
                    height="200"
                    src={`${process.env.PUBLIC_URL}/source/photos2_3.jpg`} 
                    title="New York" 
                />
                </div>
    </Grid>
    <Grid itemclassName={classes.paraFormat}>
    <div className={classes.centerFormat}>
    <img 
                    alt="Hudson River"
                    height="200"
                    src={`${process.env.PUBLIC_URL}/source/photos2_4.jpg`} 
                    title="New York" 
                />
                </div>
    </Grid>
    </div>
    
);
}

                  