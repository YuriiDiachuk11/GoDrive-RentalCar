import React from "react";
import s from "./ChooseRentalPrice.module.css";

const ChooseRentalPrice = () => {
  const prices = [30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
  return (
    <div className={s.container}>
      <select
        className={s.selectRentalPrice}
        name="rentalPrice"
        id="rentalPrice"
      >
        <option value="">Choose a price</option>
        {prices.map((price) => {
          return (
            <option key={price} value={price}>
              {price}
            </option>
          );
        })}
      </select>
      <svg className={s.svg} width="16" height="16">
        <use href="/assets/sprite.svg#icon-vector-upcopy"></use>
      </svg>
    </div>
  );
};

export default ChooseRentalPrice;
