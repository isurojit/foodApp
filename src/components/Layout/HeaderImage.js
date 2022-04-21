import React from "react";
import mealsImg from "../../assets/img/food-banner.jpg";
import classes from "./HeaderImage.module.css";

const Headerimage = () => {
  return (
    <div className={classes["main-image"]}>
      <img src={mealsImg} alt="A table full of delicious meals" />
    </div>
  );
};

export default Headerimage;
