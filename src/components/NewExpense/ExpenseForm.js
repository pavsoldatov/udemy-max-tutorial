import "./ExpenseForm.css";

import ExpenseFormInput from "./ExpenseFormInput";
import { useState } from "react";
import NewExpenseToggle from "./NewExpenseToggle";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (e) => setTitle(e.target.value);
  const amountChangeHandler = (e) => setAmount(e.target.value);
  const dateChangeHandler = (e) => setDate(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    props.onSubmitExpense(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <ExpenseFormInput
          type={"text"}
          name={"Title"}
          onChange={titleChangeHandler}
          value={title}
        />
        <ExpenseFormInput
          type={"number"}
          name={"Amount"}
          onChange={amountChangeHandler}
          value={amount}
        />
        <ExpenseFormInput
          type={"date"}
          name={"Date"}
          min={"2019-01-01"}
          max={"2022-12-31"}
          onChange={dateChangeHandler}
          value={date}
        />
      </div>
      <div className="new-expense__actions">
        <NewExpenseToggle
          text={"Cancel"}
          onCancelForm={props.onCancelForm}
          isActive={props.isActive}
        />
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
