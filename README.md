# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### STEPS

*   Deleting of unneccesary files and component, Creating of the Components i need to carry out my projects
    #App.js
    #TransactionData.js
    #DisplayTran.js
    #TransactionForm.js
    #FilterTransaction.js

*   Creating of basic HTML including struturing of the table to suit the desired outcome, and creating of buttons

*   Installation of json server and db.json file, then used useEffect to fetch to GET the database from the server
             useEffect(() => {
             fetch("http://localhost:3000/transactions")
             .then(res => res.json())
             .then(transactions => {setTransactions(transactions)})
             },[hasChange])

*   Creating of useState[destructing]  to handle controlled flow

*   Defining of various codes in the components created and passing through prop and using of .map() to iterate over the data list
                {transactions.map((transaction) => {
                return <TransactionData key={transaction.id}
                handleDelete={handleDelete}
                count={count++}
                transaction={transaction}/>)}
        while passing the return through a child component "<TransactionData />"

*   Adding of function to the buttons and event listeners 

*   Added functionlality to the filter and Delete button and finally added CSS to the project

