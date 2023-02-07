import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formVisible, setFormVisible] = useState(false);

  const addNewExpenseHandler = () => {
    setFormVisible(() => true);
  };

  const cancelButtonHandler = () => {
    return setFormVisible(() => false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
  };

  return (
    <div className="new-expense">
      {!formVisible && <button onClick={addNewExpenseHandler}>Add New Expense</button>}
      {formVisible &&
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelButton={cancelButtonHandler}
        />}
    </div>
  );
};

export default NewExpense;
