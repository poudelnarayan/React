import React, { useState } from 'react';

import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectdYear => {
    setFilteredYear(selectdYear);
  }

  //let expensesContent = <p>No expense found</p>

  // We can store JSX to a variable

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

      {/*
      {filteredExpenses.length === 0 && <p>No expenses found.</p>}

      // !if the first condition is matched the text in the paragraph is displayed

      {filteredExpenses.length > 0 && filteredExpenses.map(expense => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      }
    
    */}
      <ExpensesChart expenses={ filteredExpenses} />
      <ExpensesList items={filteredExpenses} />

    </Card>
  );
}

export default Expenses;
