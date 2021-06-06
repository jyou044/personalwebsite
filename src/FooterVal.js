import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';

class FooterVal extends Component{
  render(){
    return (
    <div>
      <Paper elevation={3}>
        {this.props.children}
        <h2 className="white-text"><center>© 2021 Jason You</center></h2>
        <h2 className="grey-text text-lighten-4"><center> V 1.0</center></h2>
      </Paper>
      
    </div>
    );
  }
}
export default FooterVal;