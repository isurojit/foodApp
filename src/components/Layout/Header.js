import React from "react";
import mealsImg from "../../assets/img/food-banner.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Heaven Of Foods</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table full of delicious meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
