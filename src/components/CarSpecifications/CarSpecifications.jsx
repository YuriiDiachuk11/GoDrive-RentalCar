import React from "react";
import s from "./CarSpecifications.module.css";

const CarSpecifications = ({ car }) => {
  const newArray = [...car.accessories, ...car.functionalities];
  return (
    <div>
      <section className={s.specs}>
        <h2>Car Specifications</h2>
        <ul>
          <li>
            <svg className={s.svg} width="16" height="16">
              <use href="src/assets/sprite.svg#icon-calendar2"></use>
            </svg>
            Year: {car.year}
          </li>
          <li>
            <svg className={s.svg} width="16" height="16">
              <use href="src/assets/sprite.svg#icon-car2"></use>
            </svg>
            Type: {car.type}
          </li>
          <li>
            <svg className={s.svg} width="16" height="16">
              <use href="src/assets/sprite.svg#icon-fuel-pump2"></use>
            </svg>
            Fuel Consumption: {car.fuelConsumption}
          </li>
          <li>
            <svg className={s.svg} width="16" height="16">
              <use href="src/assets/sprite.svg#icon-gear21"></use>
            </svg>
            Engine Size: {car.engineSize}
          </li>
        </ul>
      </section>

      <section>
        <h2>Accessories and functionalities:</h2>
        <ul>
          {newArray.map((item, index) => {
            return (
              <li key={index}>
                <svg className={s.svg} width="16" height="16">
                  <use href="src/assets/sprite.svg#icon-check-circle"></use>
                </svg>
                {item}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default CarSpecifications;
