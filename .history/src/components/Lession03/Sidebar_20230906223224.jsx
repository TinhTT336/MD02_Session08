import React from 'react'

export default function Sidebar() {
    return (
        <div>
            <>
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
            </>

        </div>
    )
}
