/*
* Code written by: Jason You 
*/
import React, { Component } from 'react'
import FooterVal from '../FooterVal'
class Layout extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <FooterVal />
            </div>
        )
    }
}
export default Layout