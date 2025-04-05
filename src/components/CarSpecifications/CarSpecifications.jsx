import React from "react";
import s from "./CarSpecifications.module.css";

const CarSpecifications = ({ car }) => {
  return (
    <section>
      <h2 className={s.title}>Car Specifications</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <svg className={s.svg} width="16" height="16">
            <use href="/assets/sprite.svg#icon-calendar2"></use>
          </svg>
          Year: {car.year}
        </li>
        <li className={s.item}>
          <svg className={s.svg} width="16" height="16">
            <use href="/assets/sprite.svg#icon-car2"></use>
          </svg>
          Type: {car.type}
        </li>
        <li className={s.item}>
          <svg className={s.svg} width="16" height="16">
            <use href="/assets/sprite.svg#icon-fuel-pump2"></use>
          </svg>
          Fuel Consumption: {car.fuelConsumption}
        </li>
        <li className={s.item}>
          <svg className={s.svg} width="16" height="16">
            <use href="/assets/sprite.svg#icon-gear21"></use>
          </svg>
          Engine Size: {car.engineSize}
        </li>
      </ul>
    </section>
  );
};

export default CarSpecifications;
