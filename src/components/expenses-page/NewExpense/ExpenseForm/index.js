import React, { useState } from "react";
import "./styles.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault(); //prevents the browser from reloading once a form updates

    if (title === "" || amount === "" || !isNaN(date)) {
      return console.log("Not doing it");
    }

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(expenseData); //pass data up to 'NewExpense'

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="expense_title">Title</label>
          <input
            id="expense_title"
            type="text"
            value={title}
            onChange={titleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="expense_amount">Amount</label>
          <input
            id="expense_amount"
            type="number"
            min={0.01}
            step={0.01}
            value={amount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="expense_date">Date</label>
          <input
            id="expense_date"
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            value={date}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancelNewExpense} type="submit">
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
