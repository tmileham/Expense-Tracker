import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filteredYearHandler = (selectedYear) => {
    console.log(`Filtered year is: ${selectedYear}`);
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilteredYear={filteredYearHandler}
      />
      {items
        .filter((expense) => {
          return filteredYear === expense.date.getFullYear().toString();
        })
        .map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
    </Card>
  );
};

export default Expenses;
