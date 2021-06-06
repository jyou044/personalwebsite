import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './MyExperience.css';
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
        marginBottom: '4rem',
    },
    paraFormat: {
        marginBottom: '1rem',
        color: theme.palette.text.primary,
        lineHeight: 2.6,
        textAlign: 'center',
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
  
export default function MyExperience() {
    const classes = useStyles();
    return (     
            <div>
                 <Grid item container>
                        <Grid item xs={12} xl={12}>
                        <Typography variant="h5" align="center" className={classes.spacing} gutterBottom></Typography>
                        <Typography variant="h2" align="center" gutterBottom><b>Work Experience</b></Typography>
                        </Grid>
                    </Grid>
                <Grid item container>
                        <Grid item xs={12} xl={3}></Grid>
                        <Grid item xs={12} xl={3} className={classes.textFormat}  style={{padding: 20}}>
                        <Typography variant="h4" align="center" gutterBottom><b>Employment and Social Development Canada</b></Typography>
                        <Typography variant="h6" align="center" gutterBottom><b><i>May 2021 - August 2021</i></b></Typography>
                        <img
                            alt="esdc"
                            height="150"
                                src={`${process.env.PUBLIC_URL}/source/esdc.png`} 
                            title="esdc" 
                        />
                        </Grid>
                        <Grid item xs={12} xl={3} className={classes.paraFormat} style={{padding: 20}}>
                            <p><b>I am currently working as a Frontend Developer at Employment and Social Development Canada (ESDC). I am assisting in the development of a dynamic website for Canada's youth through the use of React JS and other
                                relevant tools. I participate in daily standups and scrum meetings in an agile environment. </b></p>
                        </Grid>
                    </Grid>
                    <Grid item container>
                        <Grid item xs={12} xl={3}></Grid>
                        <Grid item xs={12} xl={3} className={classes.textFormat} style={{padding: 20}}>
                        <Typography variant="h4" align="center" gutterBottom><b>Government of Canada</b></Typography>
                        <Typography variant="h6" align="center" gutterBottom><b><i>October 2020 - April 2021</i></b></Typography>
                        <img
                    alt="Government of Canada"
                    height="200"
                        src={`${process.env.PUBLIC_URL}/source/GovCanada.jpg`} 
                    title="Canada" 
                />
                        </Grid>
                        <Grid item xs={12} xl={3} className={classes.paraFormat} style={{padding: 20}}>
                            <p><b>From October 2020 to April 2021, I worked with the Central Help Desk team at the Government of Canada (GOC) as a Level 1 Technical Analyst. I provided client support by phone and email in addition to advising GOC 
                                users and external partners across Canada. Additionally, I gave follow-up services by accurately logging and updating all service requests using a call tracking software.</b></p>
                        </Grid>
                    </Grid>
                    <Grid item container>
                        <Grid item xs={12} xl={3}></Grid>
                        <Grid item xs={12} xl={3} className={classes.textFormat}  style={{padding: 20}}>
                        <Typography variant="h4" align="center" gutterBottom><b>Department of National Defence</b></Typography>
                        <Typography variant="h6" align="center" gutterBottom><b><i>May 2019 - April 2020</i></b></Typography>
                        <img
                    alt="nationaldefence"
                    height="200"
                        src={`${process.env.PUBLIC_URL}/nationaldefence.png`} 
                    title="national defence" 
                />
                        </Grid>
                        <Grid item xs={12} xl={3} className={classes.paraFormat} style={{padding: 20}}>
                            <p><b>After my first year, I worked as an IM/IT Technical Analyst at the Department of National Defence in Ottawa, Canada. I utilized Hibernate ORM, JavaServer Pages Standard Tag Library (JSTL), SQL, and the 
                                Business Intelligence Reporting Tool (BIRT) software. I assisted in the development of several dynamic reports based on the requirements of clients within the Department of National Defence (DND). 
                                I worked in collaboration with senior developers and analysts to resolve major shortcomings in report analysis through the use of BIRT and other relevant computing software.</b></p>
                        </Grid>
                    </Grid>
                </div>

    );
}