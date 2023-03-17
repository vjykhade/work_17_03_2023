import { useState } from 'react';
import './App.css';
import Expense from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_DATA = [
  {title : "Paper" , amount:"200" , date: new Date (2023, 2 ,28)},
  {title : "Pens" , amount:"40" , date: new Date (2023, 2 ,28)},
  {title : "Tables" , amount:"2000" , date: new Date (2023, 2 ,28)},
  {title : "New TV" , amount:"2500" , date: new Date (2023, 2 ,28)}
]

function App(props) {
    
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses)=>{
        return[expense, ...prevExpenses]
    });
  }

  return (
    <div className="App">
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expense items={expenses}/>
    </div>
  );
}

export default App;
