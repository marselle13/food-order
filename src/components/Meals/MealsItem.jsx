import classes from "./MealsItem.module.css";

const MealsItem = (props) => {
  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.des}</p>
        <p className={classes.price}>{props.price}</p>
      </div>
      <div></div>
    </li>
  );
};

export default MealsItem;
