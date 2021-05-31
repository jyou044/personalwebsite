import React from 'react';
import Grid from '@material-ui/core/Grid';
import './About.css';

export default function About() {
        return (
            
            <div>
                <Grid container spacing ={3}>
                    <Grid item xs={12} container
                    direction="row"
                    justify="center"
                    alignItems="center">
                        <h1>Hi, I'm Jason</h1>
                    </Grid>
                </Grid>
            </div>
        );
    }

