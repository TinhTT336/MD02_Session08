import React from 'react'

export default function Contact() {
    return (
        <div>
            <div className="d-flex" id="wrapper">
                {/* Sidebar*/}
                <div className="border-end bg-white" id="sidebar-wrapper">
                    <div className="sidebar-heading border-bottom bg-light">Home</div>
                    <div className="list-group list-group-flush">
                        <a
                            className="list-group-item list-group-item-action list-group-item-light p-3"
                            href="./dashboard.html"
                        >
                            Dashboard
                        </a>
                        <a
                            className="list-group-item list-group-item-action list-group-item-light p-3"
                            href="./contact.html"
                        >
                            Contact
                        </a>
                        <a
                            className="list-group-item list-group-item-action list-group-item-light p-3"
                            href="./event.html"
                        >
                            Events
                        </a>
                        <a
                            className="list-group-item list-group-item-action list-group-item-light p-3"
                            href="./profile.html"
                        >
                            Profile
                        </a>
                        <a
                            className="list-group-item list-group-item-action list-group-item-light p-3"
                            href="./login.html"
                        >
                            Login
                        </a>
                        <a
                            className="list-group-item list-group-item-action list-group-item-light p-3"
                            href="./register.html"
                        >
                            Register
                        </a>
                    </div>
                </div>
                {/* Page content wrapper*/}
                <div id="page-content-wrapper">
                    {/* Top navigation*/}
                    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                        <div className="container-fluid">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#!">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            Link
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            id="navbarDropdown"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Dropdown
                                        </a>
                                        <div
                                            className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="navbarDropdown"
                                        >
                                            <a className="dropdown-item" href="#!">
                                                Action
                                            </a>
                                            <a className="dropdown-item" href="#!">
                                                Another action
                                            </a>
                                            <div className="dropdown-divider" />
                                            <a className="dropdown-item" href="#!">
                                                Something else here
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* Page content*/}
                    <div className="container-fluid">
                        <h1 className="mt-4">THIS IS PAGE CONTACT</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}
