import React from "react";
import "./NewExpense.css";
import ExpenseFrom from "../ExpenseFrom";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random().toString(),
    };

    props.onSaveForm(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
