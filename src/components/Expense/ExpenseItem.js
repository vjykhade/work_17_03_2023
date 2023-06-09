import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import "./expenseitem.css"

const ExpenseItem = (props) => {

  const title = props.title;
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle("RICE")
  // }

  return (
    <Card className='expense-item'> 
    <ExpenseDate date={props.date}/>
    
    <div className='expense-item__description'>
        <h2>{title}</h2>
    </div>
    <div className='expense-item__price'>${props.amount}</div>
    {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  )
}

export default ExpenseItem