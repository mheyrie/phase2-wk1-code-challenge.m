import React, { useState } from 'react'

function TransactionForm({ hasChange, setHasChange}) {

const [formData, setFormData] = useState({
    date: "Input Date...",
    description: "Input Description...",
    category: "Input Category...",
    amount: 0
})

function handleChange (event) {
    setFormData ({...formData,
        [event.target.name]: event.target.value
    })
}

function handleSubmit (event) {
    event.preventDefault();
    if (formData.amount !== 0) {
        fetch ("http://localhost:3000/transactions", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
        setFormData({
            date: "Enter Date..",
            description: "Enter Description..",
            category: "Enter Category..",
            amount: 0
        })
        setHasChange(() => !hasChange)
    })
    }
}

return (
<div className="table-all">
    <h3>Enter New Transaction</h3>
    <form id="new-form" onSubmit={handleSubmit}>
        <input
         type='text'
          name='date'
           value={formData.date}
            onChange={handleChange}
             placeholder=''/>
        <input
         type='text'
          name='description'
           value={formData.description}
            onChange={handleChange}
             placeholder=''/>
        <input
         type='text'
          name='category'
           value={formData.category}
            onChange={handleChange}
             placeholder=''/>
        <input
         type='text'
          name='amount'
           value={formData.amount}
            onChange={handleChange}
             placeholder=''/>
        <button id="submit" type='submit'>Add Transaction</button>
    </form>
</div>
)
}

export default TransactionForm