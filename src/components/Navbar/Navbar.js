import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { MenuItems } from '../Navbar/MenuItems'
import About from '../About/About'
import Experience from '../Experience/Experience'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'
import './Navbar.css'
import Paper from  '@material-ui/core/Paper';
class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <Router>
                <div>
                    <Paper elevation={3} gutterBottom>
                        <nav className="NavbarItems">
                            <h1 className="navbar-logo">J Y</h1>
                            <div className="menu-icon" onClick={this.handleClick}>
                                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                            </div>
                            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                                {MenuItems.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <NavLink to={item.url} className={item.cName} >
                                                {item.title}
                                            </NavLink>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </Paper>
                    <Route path="/" exact component={Home} />
                    <Route path="/Home" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/ContactInfo" component={Contact} />
                    <Route path="/MyStory" component={Experience} />
                </div>
            </Router>
           
        )
    }
}
export default Navbar