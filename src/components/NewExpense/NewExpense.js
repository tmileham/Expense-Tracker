import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [activeForm, setActiveForm] = useState(false);

  const formHandler = () => {
    setActiveForm(!activeForm);
  };

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {activeForm ? (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          formHandler={formHandler}
        />
      ) : (
        <button onClick={formHandler}>Add Expense Item</button>
      )}
    </div>
  );
};

export default NewExpense;
