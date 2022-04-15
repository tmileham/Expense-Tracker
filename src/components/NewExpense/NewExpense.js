import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  return (
    <div>
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
