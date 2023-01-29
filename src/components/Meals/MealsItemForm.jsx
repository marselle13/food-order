import classes from "./MealsItemForm.module.css";
import Input from "../UI/Input";
import { useRef, useState } from "react";

const MealsItemForm = (props) => {
  const [isValid, setIsValid] = useState(false);
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = inputRef.current.value;

    if (
      enteredAmount.trim().length === 0 ||
      +enteredAmount < 1 ||
      +enteredAmount > 5
    ) {
      setIsValid(false);
      return;
    }

    props.onAddToCart(+enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isValid && <p>please enter a valid amount</p>}
    </form>
  );
};

export default MealsItemForm;
