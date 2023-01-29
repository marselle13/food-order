import classes from "./Header.module.css";
import meals from "../assets/meals.jpg";
import React from "react";
import HeaderButton from "./HeaderButoon";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
