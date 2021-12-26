/*
* Code written by: Jason You 
*/
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import SocialFollow from '../src/components/About/SocialFollow';

class FooterVal extends Component {
  state = {
    currentDateTime: new Date().getFullYear()
  }
  render() {
    return (
      <div>
        <Paper elevation={3}>
          {this.props.children}
          <h2 className="white-text"><center>© {this.state.currentDateTime} Jason You</center></h2>
          <SocialFollow />
          <h3 className="white-text"><center>Date Modified: 12-25-2021</center></h3>
          <h3 className="grey-text text-lighten-4"><center> V 1.3.1</center></h3>
        </Paper>
      </div>
    );
  }
}
export default FooterVal;