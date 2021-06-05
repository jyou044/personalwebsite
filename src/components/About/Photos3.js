
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
export default function Photos3() {
    const classes = useStyles();
return (

    <div className={classes.spacing}>
<Grid item className={classes.paraFormat}>
    <div className={classes.centerFormat}>
    <img 
                    alt="New York"
                    height="200"
                    src={`${process.env.PUBLIC_URL}/source/photos3_1.jpg`} 
                    title="New York" 
                />
    </div>
    </Grid>
    <Grid item className={classes.paraFormat}>
    <div className={classes.centerFormat}>
    <img 
                    alt="Korea"
                    height="200"
                    src={`${process.env.PUBLIC_URL}/source/photos3_2.jpg`} 
                    title="Korea" 
                />
    </div>
    </Grid>
    <Grid item className={classes.paraFormat}>
    <div className={classes.centerFormat}>
    <img 
                    alt="Korea"
                    height="200"
                    src={`${process.env.PUBLIC_URL}/source/photos3_3.jpg`} 
                    title="Korea" 
                />
                </div>
    </Grid>
    <Grid itemclassName={classes.paraFormat}>
    <div className={classes.centerFormat}>
    <img 
                    alt="Korea"
                    height="200"
                    src={`${process.env.PUBLIC_URL}/source/photos3_4.jpg`} 
                    title="Korea" 
                />
                </div>
    </Grid>
    </div>
    
);
}

                  