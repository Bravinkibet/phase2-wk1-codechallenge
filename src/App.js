// src/App.js
import React, { useState } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import TransactionFilter from './components/TransactionFilter';
import './App.css'; // Import the CSS file for styling

function App() {
  const [transactions, setTransactions] = useState([
     // Add more transactions here if needed
    { id: 1, date: '2024-04-28', description: 'Salary', category: 'Income', amount: 5000 },
    { id: 2, date: '2024-04-27', description: 'Groceries', category: 'Expenses', amount: -50 },
    { id: 3, date: '2024-04-26', description: 'Dinner', category: 'Expenses', amount: -300 },
    { id: 4, date: '2024-04-25', description: 'Gas bill', category: 'Expenses', amount: -80 },
    { id: 5, date: '2024-04-24', description: 'Phone bill', category: 'Expenses', amount: -60 },
    { id: 6, date: '2024-04-23', description: 'Movie tickets', category: 'Expenses', amount: -25 },
    { id: 7, date: '2024-04-22', description: 'Internet bill', category: 'Expenses', amount: -700 },
    { id: 8, date: '2024-04-21', description: 'Lunch', category: 'Expenses', amount: -15 },
    { id: 9, date: '2024-04-20', description: 'Electricity bill', category: 'Expenses', amount: -900 },
    { id: 10, date: '2024-04-19', description: 'Clothing', category: 'Expenses', amount: -100 },
   
  ]);

  const addTransaction = newTransaction => {
    setTransactions([...transactions, { ...newTransaction, id: transactions.length + 1 }]);
  };

  const filterTransactions = searchTerm => {
    const filteredTransactions = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Update the state with filtered transactions
    setTransactions(filteredTransactions);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bank of Flatiron</h1>
        <TransactionForm onAddTransaction={addTransaction} />
        <TransactionFilter onFilter={filterTransactions} />
        <TransactionTable transactions={transactions} />
      </header>
    </div>
  );
}

export default App;
