import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const styleNavLink = ({ isActive }) => ({
        color: isActive ? "white" : "green",
        backgroundColor: isActive ? "black" : "white",
    })
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button type="button" id="sidebarCollapse" className="btn btn-primary">
                        <i className="fa fa-bars" />
                        <span className="sr-only">Toggle Menu</span>
                    </button>
                    <button
                        className="btn btn-dark d-inline-block d-lg-none ml-auto"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fa fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink to={"/"} style={styleNavLink} className="nav-link">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/about"} style={styleNavLink} className="nav-link">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/portfolio"} style={styleNavLink} className="nav-link" >
                                    Portfolio
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/contact"} style={styleNavLink} className="nav-link" >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
