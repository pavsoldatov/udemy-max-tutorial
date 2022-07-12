const NewExpenseToggle = (props) => {

  const toggleState = (callback) => callback((prevState) => !prevState);
  const showFormHandler = (e) => {
    e.preventDefault();
    toggleState(props.onShowForm ?? props.onCancelForm);
  };
  const text = props.text;

  return !props.isActive ? (
    <button onClick={showFormHandler}>{text}</button>
  ) : (
    <button onClick={showFormHandler}>{text}</button>
  );
};

export default NewExpenseToggle;
