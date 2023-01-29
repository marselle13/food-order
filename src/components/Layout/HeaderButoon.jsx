import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderButton = (props) => {
  const ctx = useContext(CartContext);
  const [isBump, setIsBump] = useState(false);

  const numberOfCartItems = ctx.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  const btnClass = `${classes.button} ${isBump ? classes.bump : ""}`;

  useEffect(() => {
    if (ctx.items.length === 0) {
      return;
    }

    setIsBump(true);

    const timer = setTimeout(() => setIsBump(false), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [ctx.items]);

  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.cart}>Your Cart </span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderButton;
