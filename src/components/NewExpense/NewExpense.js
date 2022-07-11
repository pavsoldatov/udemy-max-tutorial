import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import NewExpenseToggle from "./NewExpenseToggle";

const NewExpense = (props) => {
  const submitExpenseHandler = (expenseData) => {
    const enrichedExpense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(enrichedExpense);
  };

  const [isActive, setToggle] = useState(false);

  return (
    <div className="new-expense">
      {isActive ? (
        <ExpenseForm
          onSubmitExpense={submitExpenseHandler}
          onCancelForm={setToggle}
          isActive={isActive}
        />
      ) : (
        <NewExpenseToggle
          text={"Add New Expense"}
          onShowForm={setToggle}
          isActive={isActive}
        />
      )}
    </div>
  );
};

export default NewExpense;
