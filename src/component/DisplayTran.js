import React from 'react'
import TransactionData from './TransactionData'



function DisplayTran({transactions, hasChange, setHasChange}) {

let count = 1


function handleDelete (event) {
    const id = event.target.id
    fetch (`http://localhost:3000/transactions/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    }).then(res => res.json())
    .then(data => {
      setHasChange(() => !hasChange)
    })

}    

  return (
    <div>
        <table className="TransTable"> 
            <thead>
                <tr>
                    <th>S/N</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => {
            return <TransactionData key={transaction.id}
             handleDelete={handleDelete}
              count={count++}
               transaction={transaction}/>
          })}
            </tbody>
      </table>
    </div>
  )
}

export default DisplayTran
