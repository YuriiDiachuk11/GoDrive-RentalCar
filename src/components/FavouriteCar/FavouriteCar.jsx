import React from "react";
import s from "./FavouriteCar.module.css";

const FavouriteCar = ({ car }) => {
  return (
    <div>
      <img className={s.image} src={car.img} alt={car.model} />
    </div>
  );
};

export default FavouriteCar;
