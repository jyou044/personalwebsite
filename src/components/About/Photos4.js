
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
export default function Photos4() {
    const classes = useStyles();
return (

    <div>
<Grid item className={classes.paraFormat}>
    <div className={classes.centerFormat}>
    <img 
                    alt="ROM"
                    height="200"
                    src={`${process.env.PUBLIC_URL}/source/photos4_1.jpg`} 
                    title="ROM" 
                />
    </div>
    </Grid>
    <Grid item className={classes.paraFormat}>
    <div className={classes.centerFormat}>
    <img 
                    alt="ROM"
                    height="200"
                    src={`${process.env.PUBLIC_URL}/source/photos4_2.jpg`} 
                    title="ROM" 
                />
    </div>
    </Grid>
    <Grid item className={classes.paraFormat}>
    <div className={classes.centerFormat}>
    <img 
                    alt="CN Tower"
                    height="200"
                    src={`${process.env.PUBLIC_URL}/source/photos4_3.jpg`} 
                    title="CN Tower" 
                />
                </div>
    </Grid>
    <Grid itemclassName={classes.paraFormat}>
    <div className={classes.centerFormat}>
    <img 
                    alt="Toronto City Hall"
                    height="200"
                    src={`${process.env.PUBLIC_URL}/source/photos4_4.jpg`} 
                    title="Toronto City Hall" 
                />
                </div>
    </Grid>
    </div>
    
);
}

                  