import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar05() {
    return (
        <div>
            <>
                {/* Navbar Start */}
                <nav
                    className="navbar navbar-expand-lg bg-secondary navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn"
                    data-wow-delay="0.1s"
                >
                    <NavLink to={"/"} href="index.html" className="navbar-brand ms-4 ms-lg-0">
                        <h1 className="mb-0 text-primary text-uppercase">
                            <i className="fa fa-cut me-3" />
                            HairCut
                        </h1>
                    </NavLink>
                    <button
                        type="button"
                        className="navbar-toggler me-4"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto p-4 p-lg-0">
                            <NavLink to={"/"} href="index.html" className="nav-item nav-link">
                                Home
                            </NavLink>
                            <NavLink to={"/about"} href="about.html" className="nav-item nav-link active">
                                About
                            </NavLink>
                            <NavLink to={"/service"} href="service.html" className="nav-item nav-link">
                                Service
                            </NavLink>
                            <div className="nav-item dropdown">
                                <NavLink
                                    href="#"
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                >
                                    Pages
                                </NavLink>
                                <div className="dropdown-menu m-0">
                                    <NavLink to={"/price"} href="price.html" className="dropdown-item">
                                        Pricing Plan
                                    </NavLink>
                                    <NavLink to={"/team"} href="team.html" className="dropdown-item">
                                        Our Barber
                                    </NavLink>
                                    <NavLink to={"/open"} href="open.html" className="dropdown-item">
                                        Working Hours
                                    </NavLink>
                                    <NavLink to={"/testimonial"} href="testimonial.html" className="dropdown-item">
                                        Testimonial
                                    </NavLink>
                                    <NavLink to={"/notfound404"} href="404.html" className="dropdown-item">
                                        404 Page
                                    </NavLink>
                                </div>
                            </div>
                            <NavLink to={"/contact"} href="contact.html" className="nav-item nav-link">
                                Contact
                            </NavLink>
                        </div>
                        <NavLink
                            href=""
                            className="btn btn-primary rounded-0 py-2 px-lg-4 d-none d-lg-block"
                        >
                            Appointment
                            <i className="fa fa-arrow-right ms-3" />
                        </NavLink>
                    </div>
                </nav>
                {/* Navbar End */}
            </>

        </div>
    )
}
