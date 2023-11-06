"use client";

import React, { useState } from "react";
// import logo from "./logo.svg";
import "./style.css";
import ExpenseCards from "@/components/expenses-page/ExpenseCards";
import NewExpense from "@/components/expenses-page/NewExpense";

interface expense {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

const temp_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(),
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
const App = () => {
  const [expenses, setExpenses] = useState(temp_expenses);

  const addExpenseHandler = (expense: expense) => {
    console.log("In Main App.js");
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAddExpense={addExpenseHandler} />
        <ExpenseCards expenses={expenses} />
      </header>
    </div>
  );
};

export default App;
