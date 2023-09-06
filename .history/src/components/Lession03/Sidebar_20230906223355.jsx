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
                        <NavLink to={"/profile"}
                            className="list-group-item list-group-item-action list-group-item-light p-3"
                            href="./profile.html"
                        >
                            Profile
                        </NavLink>
                        <NavLink to={"/login"}
                            className="list-group-item list-group-item-action list-group-item-light p-3"
                            href="./login.html"
                        >
                            Login
                        </NavLink>
                        <NavLink to={"/register"}
                            className="list-group-item list-group-item-action list-group-item-light p-3"
                            href="./register.html"
                        >
                            Register
                        </NavLink>
                    </div>
                </div>
            </>

        </div>
    )
}
