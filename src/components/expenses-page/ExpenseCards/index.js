import React, { useState } from "react";
import ExpenseFilter from "../ExpenseFilter";
import ExpensesList from "./ExpensesList";
import Card from "@/components/expenses-page/Card";
import ExpensesChart from "../ExpensesChart";
import "./styles.css";

const ExpenseCards = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const FilterYearHandler = (selectedYear) => {
    console.log("inside ExpenseCard");
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onSelectedYear={FilterYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default ExpenseCards;
