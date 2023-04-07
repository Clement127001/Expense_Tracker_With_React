import React from "react";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

//using useState() hook to make the component to evaluate again

export default function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p className="expense-item__price">${props.amount}</p>
      </div>
    </Card>
  );
}
