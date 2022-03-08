/*
Code written by Jason You
*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FaHome } from 'react-icons/fa';
const useStyles = makeStyles((theme) => ({
    textFormat: {
        padding: theme.spacing(2),
        marginTop: '3rem',
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
    paraFormat: {
        marginBottom: '1rem',
        color: theme.palette.text.primary,
        lineHeight: 2.6,
        textAlign: 'center',
    },
    flexVal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.5rem',
    },
}));

export default function NotFound() {
    const classes = useStyles();
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h2" align="center" className={classes.textFormat} gutterBottom><b>404 Not Found</b></Typography>
                </Grid>
            </Grid>

            <Grid container className={classes.flexVal}>
                <Grid item xs={12} md={4} className={classes.paraFormat} style={{ padding: 20 }}>
                    <Typography variant="h5" align="center" className={classes.paraFormat} gutterBottom> <b>It seems that the url you are looking for is incorrect! To return to the home page, please click on the icon below.</b> </Typography>
                </Grid>
            </Grid>

            <Grid container className={classes.flexVal}>
                <Grid item xs={12} md={4} className={classes.paraFormat} style={{ padding: 10 }}>
                    <Link to="/Home">
                        <FaHome  style={{color: "#000000"}} size={100}></FaHome>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}