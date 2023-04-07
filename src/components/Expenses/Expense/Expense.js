import React, { useState } from "react";
// import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpenseChart from "./ExpenseChart";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import "./Expense.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");
  const filterYearChangeHandler = (year) => {
    setFilterYear(year);
  };

  const filteredExpenses = props.items.filter((exp) => {
    return exp.date.getFullYear().toString() === filterYear;
  });

  return (
    <li className="mainContainer">
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterYearChange={filterYearChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
