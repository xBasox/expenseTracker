import './ExpenseItem.css';

const ExpenseItem = () => {
  const expenseDate = new Date(2022,3,21);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
  
  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <h2>{expenseTitle}</h2>
      <div className='epense-item__description'>
        <div className='expense-item__price'>{"$"+expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;