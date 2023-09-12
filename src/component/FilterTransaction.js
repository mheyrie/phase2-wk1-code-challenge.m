import React, {useState} from 'react'

function FilterTransaction({ setTransactions }) {

    const [inputText,setInputText] = useState("Search..")

    function filterByDescription (event) {
        event.preventDefault();
        setInputText(event.target.value)
        fetch("http://localhost:3000/transactions")
        .then(res => res.json())
        .then(transactions => {
            // eslint-disable-next-line
            setTransactions(transactions.filter((transaction) => {
                if((transaction.description).toLowerCase().includes(inputText.toLowerCase())
                || inputText === "" || inputText === "Search...")
            return true
            }))
        })
    }

  return (
    <div>
        <h3>Filter By Description</h3>
        <form id="form-for-filter" onSubmit={filterByDescription}>
            <input name='filter'
             onChange={filterByDescription}
              value={inputText}/>
            <button id="filter-button">Filter</button>
        </form>
    </div>
  )
}


export default FilterTransaction