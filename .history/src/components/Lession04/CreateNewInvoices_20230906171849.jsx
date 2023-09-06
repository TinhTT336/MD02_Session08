import React from 'react'

export default function CreateNewInvoices() {
    return (
        <div>
            <form action="">
                <label htmlFor="newInvoice">New Invoice Name</label>
                <input type="text" name="newInvoice" id="newInvoice" />
                <button>Create New Invoice</button>
            </form>
        </div>
    )
}
