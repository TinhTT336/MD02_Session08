import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div>
            <>
                {/* Sidebar*/}
                <div className="border-end bg-white" id="sidebar-wrapper">
                    <div className="sidebar-heading border-bottom bg-light">Home</div>
                    <div className="list-group list-group-flush">
                        <NavLink to={"/"}
                            className="list-group-item list-group-item-action list-group-item-light p-3"
                            href="./dashboard.html"
                        >
                            Dashboard
                        </NavLink>
                        <NavLink to={"/contact"}
                            className="list-group-item list-group-item-action list-group-item-light p-3"
                            href="./contact.html"
                        >
                            Contact
                        </NavLink>
                        <NavLink to={"/event"}
                            className="list-group-item list-group-item-action list-group-item-light p-3"
                            href="./event.html"
                        >
                            Events
                        </NavLink>
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
            </>

        </div>
    )
}
