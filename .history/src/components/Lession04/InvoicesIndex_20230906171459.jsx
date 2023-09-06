import React from 'react'
import { NavLink } from 'react-router-dom'

export default function InvoicesIndex() {
    return (
        <div>
            <ul style={{ display: "flex", gap: 15, justifyContent: "center" }}>
                <li style={{ listStyle: "none" }}> <NavLink to={"/invoices/new"}>Create New Invoices</NavLink> </li>
                <li style={{ listStyle: "none" }}> <NavLink to={"/invoices/1"}>Google</NavLink> </li>
                <li style={{ listStyle: "none" }}> <NavLink to={"/invoices/2"}>Expenses</NavLink> </li>
            </ul>
        </div>
    )
}
