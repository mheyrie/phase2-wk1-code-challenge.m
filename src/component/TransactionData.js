import React from 'react'

function TransactionData({transaction, handleDelete, count}) {

  //Destructing of the data given on fron the server
  const {id, date, description, category, amount} = transaction
  return (
    
      <tr className="transData">
        <td>{count}</td>
        <td>{date}</td>
        <td>{description}</td>
        <td>{category}</td>
        <td>{amount}</td>
        <td><button id={id} onClick={handleDelete}>Delete</button></td>
      </tr>
  
  )
}

export default TransactionData