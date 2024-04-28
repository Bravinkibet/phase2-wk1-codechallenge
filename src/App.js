// src/App.js
import React, { useState } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import TransactionFilter from './components/TransactionFilter';
import './App.css'; // Import the CSS file for styling

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2024-04-28', description: 'Salary', category: 'Income', amount: 5000 },
    { id: 2, date: '2024-04-27', description: 'Groceries', category: 'Expenses', amount: -50 },
    { id: 3, date: '2024-04-26', description: 'Dinner', category: 'Expenses', amount: -30 },
    // Add more transactions here if needed
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
