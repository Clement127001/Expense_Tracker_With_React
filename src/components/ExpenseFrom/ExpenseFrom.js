import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseFrom = (props) => {
  //we can have multiple states for hadling multiple events
  const [enteredTitle, setEnteredTitle] = useState(" ");
  const [enterdDate, setEnteredDate] = useState(" ");
  const [enteredAmount, setEnteredAmount] = useState(" ");
  const [formRender, setFormrender] = useState("0");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enterdDate),
    };

    // const formData = {
    //   title: enteredTitle,
    //   amount: enteredAmount,
    //   date: new Date(enterdDate),
    // };

    props.onSaveExpenseData(formData);

    setEnteredTitle(" ");
    setEnteredAmount(" ");
    setEnteredDate(" ");
    setFormrender("0");
  };

  const renderFormData = () => {
    setFormrender("1");
  };

  const renderButton = () => {
    setFormrender("0");
  };

  let formContent = (
    <button className="formButton AddButton" onClick={renderFormData}>
      Add New Expense
    </button>
  );

  if (formRender == 1) {
    formContent = (
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enterdDate}
            min="01-01-2020"
            max="31-12-2023"
            onChange={dateChangeHandler}
          />
        </div>
        <button onClick={renderButton} className="formButton">
          Cancel
        </button>
        <button className="formButton">Add Expense</button>
      </div>
    );
  }

  return <form onSubmit={submitHandler}>{formContent}</form>;
};

export default ExpenseFrom;
