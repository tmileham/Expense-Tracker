import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "../Chart/ExpensesChart";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filteredYearHandler = (selectedYear) => {
    console.log(`Filtered year is: ${selectedYear}`);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilteredYear={filteredYearHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
