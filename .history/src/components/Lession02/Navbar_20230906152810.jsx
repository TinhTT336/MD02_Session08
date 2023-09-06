import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    <img src='public/images/navbar-logo.svg' alt='' />
    return (
        <div>
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
                                    <a className="nav-link" href="#about">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#team">
                                        Team
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>

        </div>
    )
}
