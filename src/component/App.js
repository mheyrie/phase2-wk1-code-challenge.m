import React, {useState, useEffect} from 'react'
import DisplayTran from './DisplayTran'
import TransactionForm from './TransactionForm'
import FilterTransaction from './FilterTransaction'


function App() {

 const [transactions, setTransactions] = useState([])
  const [hasChange, setHasChange] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
    .then(res => res.json())
    .then(transactions => {setTransactions(transactions)})
  },[hasChange])

  return (
    <div className="App">
      <TransactionForm hasChange={hasChange}
       setHasChange={setHasChange}/>
       
       <FilterTransaction hasChange={hasChange}
       setHasChange={setHasChange}
       setTransactions={setTransactions}/>


      <DisplayTran transactions={transactions}
      hasChange={{hasChange}} setHasChange={setHasChange} />

        
     </div>
    )
}

export default App