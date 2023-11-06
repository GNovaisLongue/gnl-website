import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./styles.css";

const NewExpense = (props) => {
  const [isEditing, setEditing] = useState(false);

  const ExpenseDataHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditing(false);
  };

  const startEditingHandler = () => {
    setEditing(true);
  };
  const stopEditingHandler = () => {
    setEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={ExpenseDataHandler}
          onCancelNewExpense={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
