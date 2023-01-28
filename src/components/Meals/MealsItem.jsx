import classes from "./MealsItem.module.css";
import MealsItemForm from "./MealsItemForm";

const MealsItem = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.des}</p>
        <p className={classes.price}>{props.price}</p>
      </div>
      <div>
        <MealsItemForm />
      </div>
    </li>
  );
};

export default MealsItem;
