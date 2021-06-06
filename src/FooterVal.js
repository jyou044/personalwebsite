import React, {Component} from 'react';


class FooterVal extends Component{
  render(){
    return (
    <div>
      {this.props.children}

        <h2 className="white-text"><center>© 2021 Jason You</center></h2>
        <h2 className="grey-text text-lighten-4"><center>BETA V1.0</center></h2>
    </div>
    );
  }
}
export default FooterVal;