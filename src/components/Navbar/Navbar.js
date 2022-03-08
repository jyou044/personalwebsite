/*
Code written by Jason You
*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom";
import { MenuItems } from '../Navbar/MenuItems'
import About from '../About/About'
import Experience from '../Experience/Experience'
import WorkExperience from '../Work Experience/MyExperience';
import Home from '../Home/Home' 
import NotFound from '../../NotFound';
import './Navbar.css'
import OutsideClickHandler from 'react-outside-click-handler';
class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    handleClickOutside = () => {
        this.setState({clicked: false})
    }
    render() {
        return (
            <Router>
                <div className="spacing">
                    <OutsideClickHandler onOutsideClick={this.handleClickOutside}>
                        <nav className="NavbarItems">
                            <h1 className="navbar-logo">J Y</h1>
                            <div className="menu-icon" onClick={this.handleClick}>
                                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                            </div>
                            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                                {MenuItems.map((item, index) => {
                                    return (
                                        <li key={index} >
                                            <NavLink to={item.url} className={item.cName} onClick={this.handleClick} >
                                                {item.title}
                                            </NavLink>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav> 
                    </OutsideClickHandler>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/Home" exact component={Home} />
                        <Route path="/About" component={About} />
                        <Route path="/MyStory" component={Experience} />
                        <Route path="/MyExperience" component={WorkExperience} />
                        <Route path="/NotFound" component={NotFound} />
                        <Redirect from='*' to='/NotFound' />
                    </Switch>
                    
                </div>
            </Router>

        )
    }
}
export default Navbar 