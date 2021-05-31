import React, {Component} from 'react';
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);

class Footer extends Component{
  render(){

    return (
    <div>
      {this.props.children}
      <ColoredLine color="black" />
        <h3 className="white-text"><center><b>V 1.0</b></center></h3>
    </div>
    );
  }
}
export default Footer;