import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderButton = (props) => {
  const ctx = useContext(CartContext);

  const numberOfCartItems = ctx.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.cart}>Your Cart </span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderButton;
