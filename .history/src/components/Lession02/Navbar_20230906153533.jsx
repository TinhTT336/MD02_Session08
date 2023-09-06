import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (

        <>
            {/* Navigation*/}
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <NavLink to={"/"} className="navbar-brand" >
                        <img src='public/images/navbar-logo.svg' alt='' />
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        Menu
                        <i className="fas fa-bars ms-1" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li className="nav-item">
                                <NavLink to={"/services"} className="nav-link" >
                                    Services
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/portfolio"} className="nav-link">
                                    Portfolio
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/about"} className="nav-link">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/team"} className="nav-link" >
                                    Team
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/contact"} className="nav-link" >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}
