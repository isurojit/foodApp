import React, { useContext } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-contex";

const HeaderCartButton = (props) => {
  const cartCTX = useContext(CartContext);
  const numberOfCartItems = cartCTX.items.reduce(() => {}, 0);
  return (
    <button className={classes.button} onClick={props.afterClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
