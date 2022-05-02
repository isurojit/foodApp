import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import HeaderImage from "./HeaderImage";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Heaven Of Foods</h1>
        <HeaderCartButton afterClick={props.onShowCart} />
      </header>
      <HeaderImage />
    </React.Fragment>
  );
};

export default Header;
