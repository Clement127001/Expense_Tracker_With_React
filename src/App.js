import React, { useState } from "react";

import Expenses from "./components/Expenses/Expense/Expense";
import NewExpense from "./components/ExpenseFrom/NewExpense/NewExpense";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 2, 21),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 4, 1),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 9, 14),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2020, 1, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const saveFormHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onSaveForm={saveFormHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
