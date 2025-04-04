import React from "react";
import s from "./CarItem.module.css";

const CarItem = ({ car }) => {
  return (
    <div>
      <img className={s.icon} src={car.img} alt={car.model} />
      <h3 className={s.title}>
        {car.brand} {car.model} {car.year}
      </h3>
      <p className={s.address}>{car.address}</p>
      <p className={s.type}>{car.type}</p>
      <p className={s.mileage}>{car.mileage}</p>
      <p className={s.price}>${car.rentalPrice}</p>
    </div>
  );
};

export default CarItem;
