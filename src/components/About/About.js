import React from 'react';
import Grid from '@material-ui/core/Grid';
import './About.css';
import Typography from '@material-ui/core/Typography';
export default function About() {
    return (     
        <div>
            <Grid container spacing ={3}>
                <Grid item xs={12} container
                direction="row"
                justify="center"
                alignItems="center">
                    <Typography variant='h2' gutterBottom>Hi, I'm Jason</Typography>
                </Grid>
                <Grid item xs={5}>
                <Typography variant='paragraph' gutterBottom>I'm a 3rd year software engineering student at the University of Ottawa.&nbsp;
                From a young age, I have been fascinated with the field of Information Technology and it's applications.</Typography>
                </Grid>
                <Grid item>
                </Grid>
             </Grid>
        </div>
    );
}

