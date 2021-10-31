/*
Code written by Jason You
*/
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './MyExperience.css';
const useStyles = makeStyles((theme) => ({
    textFormat: {
        marginBottom: '1rem',
        color: theme.palette.text.primary,
        lineHeight: 2.6,
        textAlign: 'center',
    },
    spacing: {
        marginBottom: '4rem',
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
        marginBottom: '1rem',
    },
}));

export default function MyExperience() {
    const classes = useStyles();
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div >
            <Grid item container>
                <Grid item xs={12} md={12} className={classes.textFormat} style={{ padding: 20 }}>
                    <Typography variant="h3" align="center" className={classes.spacing} gutterBottom><b>My Experience</b></Typography>
                </Grid>
            </Grid>

            <Grid item container className={classes.flexVal}>
                <Grid item xs={12} lg={3} className={classes.textFormat} style={{ padding: 20 }}>
                    <Typography variant="h4" align="center" gutterBottom><b>Finastra</b></Typography>
                    <Typography variant="h6" align="center" gutterBottom><b><i>September 2021 - Present</i></b></Typography>
                    <img
                        alt="finastra"
                        height="100"
                        src={`${process.env.PUBLIC_URL}/finastra.png`}
                        title="finastra"
                    />
                </Grid>
                <Grid item xs={12} lg={3} className={classes.paraFormat} style={{ padding: 20 }}>
                    <p><b>I am currently working as an Associate QA Automation Engineer Intern at Finastra.</b></p>
                </Grid>
            </Grid>

            <Grid item container className={classes.flexVal}>
                <Grid item xs={12} lg={3} className={classes.textFormat} style={smDown ? {padding: 20}: { paddingBottom: 100 }}>
                    <Typography variant="h4" align="center" gutterBottom paragraph><b>Employment and Social Development Canada</b></Typography>
                    <Typography variant="h6" align="center" gutterBottom paragraph><b><i>May 2021 - August 2021</i></b></Typography>
                    <img
                        alt="ESDC"
                        height="100"
                        src={`${process.env.PUBLIC_URL}/source/goc.png`}
                        title="ESDC"
                    />
                </Grid>
                <Grid item xs={12} lg={3} className={classes.paraFormat} style={{ padding: 20 }}>
                    <p><b>During the summer 2021 term, I worked at Employment and Social Development Canada (ESDC) as a 
                        Frontend Developer. I used React JS and other relevant web tools in addition to participating in daily scrum meetings. 
                        I was a contributing member of the <a href="https://www.youth.service.canada.ca/en" style={{color: "#000000"}} target="_blank" rel="noreferrer" >Youth Digital Gateway</a> project, an outreach intiative by the government to better fulfill the needs of young Canadians.</b></p>
                </Grid>
            </Grid>

            <Grid item container className={classes.flexVal}>
                <Grid item xs={12} lg={3} className={classes.textFormat} style={{ padding: 20 }}>
                    <Typography variant="h4" align="center" gutterBottom><b>Royal Canadian Mounted Police</b></Typography>
                    <Typography variant="h6" align="center" gutterBottom><b><i>October 2020 - April 2021</i></b></Typography>
                    <img
                        alt="Royal Canadian Mounted Police"
                        height="150"
                        src={`${process.env.PUBLIC_URL}/source/RCMP.png`}
                        title="Canada"
                    />
                </Grid>
                <Grid item xs={12} lg={3} className={classes.paraFormat} style={{ padding: 20 }}>
                    <p><b>I worked with the Central Help Desk team at the Royal Canadian Mounted Police (RCMP) as a Level 1 Technical Analyst. I provided client support by phone and email in addition to advising GOC
                        users and external partners across Canada. I also gave follow-up services by accurately logging and updating all service requests using a call tracking software.</b></p>
                </Grid>
            </Grid>

            <Grid item container className={classes.flexVal}>
                <Grid item xs={12} lg={3} className={classes.textFormat} style={{ padding: 20 }}>
                    <Typography variant="h4" align="center" gutterBottom><b>Department of National Defence</b></Typography>
                    <Typography variant="h6" align="center" gutterBottom><b><i>May 2019 - April 2020</i></b></Typography>
                    <img
                        alt="nationaldefence"
                        height="200"
                        src={`${process.env.PUBLIC_URL}/nationaldefence.png`}
                        title="national defence"
                    />
                </Grid>
                <Grid item xs={12} lg={3} className={classes.paraFormat} style={{ padding: 20 }}>
                    <p><b>I worked as an IM/IT Technical Analyst at the Department of National Defence in Ottawa, Canada. I utilized Hibernate ORM, JavaServer Pages Standard Tag Library (JSTL), SQL, and the
                        Business Intelligence Reporting Tool (BIRT) software. I assisted in the development of several dynamic reports based on the requirements of clients within the Department of National Defence (DND).
                    </b></p>
                </Grid>
            </Grid>
        </div>
    );
}