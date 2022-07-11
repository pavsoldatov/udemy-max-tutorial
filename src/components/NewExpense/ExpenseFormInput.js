import "./ExpenseFormInput.css";

const ExpenseFormInput = (props) => {
  return (
    <div className="new-expense__control">
      <label>{props.name}</label>
      <input
        onChange={props.onChange}
        value={props.value}
        type={props.type}
        min={props.min}
        max={props.max}
      />
    </div>
  );
};

export default ExpenseFormInput;
