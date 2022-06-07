import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {  

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
      <h2>{props.title}</h2>
      <div className='epense-item__description'>
        <div className='expense-item__price'>{"$"+props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;