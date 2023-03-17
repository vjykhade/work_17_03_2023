import React, { useState } from "react";
import "./expenseform.css";

const ExpenseForm = (props) => {
//   const [newtitle, setNewTitle] = useState('');
//   const [newamount, setNewAmount] = useState('');
//   const [newdate, setNewDate] = useState('');

  const [userInput, setUserInput] = useState({
    newtitle: '',
    newamount: '',
    newdate: ''
  });  

  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
        return {...prevState, newtitle: e.target.value}
    })
  };

  const amountChangeHandler = (e) => {
    setUserInput((prevState) => {
        return {...prevState, newamount: e.target.value}
    })
  }

  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
        return {...prevState, newdate: e.target.value}
    })
    
  }

  const sumbitHandler = (event) => {
    event.preventDefault();
        const expenseData = {
            title: userInput.newtitle,
            amount: userInput.newamount,
            date: new Date(userInput.newdate)
        };   
    
        props.onSaveExpenseData(expenseData);
        
  }

  return (
    <form onSubmit={sumbitHandler}>  
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number"  min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date"  min="2023-01-01" max="2099-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
