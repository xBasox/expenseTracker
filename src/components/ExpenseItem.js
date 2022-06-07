import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <h2>{props.title}</h2>
      <div className="epense-item__description">
        <div className="expense-item__price">{"$" + props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
