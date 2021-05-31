import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Grid from '@material-ui/core/Grid';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import './Experience.css';

export default function Experience() {
        return (
            <div>
                <Grid item xs={12} container
                direction="row"
                justify="center"
                alignItems="center" className="Experience">
 <React.Fragment>
                    <Timeline align="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent>
                        <Typography variant='h4' color="textSecondary">2000</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        <Typography variant='h4'>Birth</Typography>
                        <Typography paragraph>On December 20, 2000 I was born in Toronto, Canada</Typography>
                        <img
                                        alt="CN Tower"
                                        height="300"
                                        src={`${process.env.PUBLIC_URL}/source/CN.jpg`} 
                                        title="Toronto, Canada" 
                                        />
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                        <Typography variant='h4' color="textSecondary">2001</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        <Typography variant='h4'>Seoul, Korea</Typography>
                        <Typography paragraph>In 2001, I moved to Seoul with my parents as my dad's company was there</Typography>
                        <img
                                        alt="Korea"
                                        height="300"
                                        src={`${process.env.PUBLIC_URL}/source/Seoul.jpg`} 
                                        title="Seoul Korea" 
                                        />
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                        <Typography variant='h4' color="textSecondary">2005</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        <Typography variant='h4'>Toronto, Canada</Typography>
                        <Typography paragraph>In 2005, I moved back to my birthplace of Toronto</Typography>
                        <img
                                        alt="Korea"
                                        height="300"
                                        src={`${process.env.PUBLIC_URL}/source/Seoul.jpg`} 
                                        title="Seoul Korea" 
                                        />
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                        <Typography variant='h4' color="textSecondary">2011</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        <Typography variant='h4'>Elementary Graduation</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                        <Typography variant='h4' color="textSecondary">2014</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        <Typography variant='h4'>Middle School Graduation</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                        <Typography variant='h4' color="textSecondary">2018</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        <Typography variant='h4'>High School Graduation</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                        <Typography variant='h4' color="textSecondary">2019</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        <Typography variant='h4'>First Work Term</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                        <Typography variant='h4' color="textSecondary">2019-Present</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        <Typography variant='h4'>Repeat</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    
                    </Timeline>
                </React.Fragment>

                </Grid>
            </div>
            
        );
    }