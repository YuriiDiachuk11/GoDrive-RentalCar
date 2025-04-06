import React from "react";
import s from "./RentInfo.module.css";

const RentInfo = ({ car }) => {
  // Масив умов оренди, які передаються через car.rentalConditions
  const rentalConditions = car.rentalConditions;

  return (
    <section>
      <h2 className={s.title}>Rental Conditions:</h2>
      <ul className={s.list}>
        {rentalConditions.map((condition, index) => (
          <li className={s.item} key={index}>
            <svg className={s.svg} width="16" height="16">
              <use href="/assets/sprite.svg#icon-check-circle"></use>
            </svg>
            {condition}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RentInfo;
