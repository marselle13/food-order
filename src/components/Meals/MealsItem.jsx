import { useContext } from "react";
import classes from "./MealsItem.module.css";
import MealsItemForm from "./MealsItemForm";
import CartContext from "../../store/cart-context";

const MealsItem = (props) => {
  const ctx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.des}</p>
        <p className={classes.price}>{props.price}</p>
      </div>
      <div>
        <MealsItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealsItem;
