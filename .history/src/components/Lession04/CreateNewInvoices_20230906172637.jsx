import React from 'react'

export default function CreateNewInvoices() {
    return (
        <div>
            <form action="" style={{ margin: " 0 auto" }}>
                <p><label htmlFor="newInvoice">New Invoice Name</label></p>
                <input type="text" name="newInvoice" id="newInvoice" />
                <button>Create New Invoice</button>
            </form>
        </div>
    )
}
