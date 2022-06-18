import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";
import "./components/NewExpense/NewExpense.css";
import "../src/main.css";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <div className="container">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses expenses={expenses} />
        <div className="new-expense">
          <a href="https://xbasox.github.io/portfolio/work.html">
            <button type="button">Go back</button>
          </a>
        </div>
      </div>
      <footer id="main-footer">
        Copyright <span class="text-secondary">iLLiev</span> &copy; 2022
      </footer>
    </div>
  );
}

export default App;
