import React from "react";
import s from "./RentInfo.module.css";

const RentInfo = () => {
  return (
    <section>
      <h2>Rental Conditions:</h2>
      <ul>
        <li>
          <svg className={s.svg} width="16" height="16">
            <use href="src/assets/sprite.svg#icon-check-circle"></use>
          </svg>
          Minimum age : 25
        </li>
        <li>
          <svg className={s.svg} width="16" height="16">
            <use href="src/assets/sprite.svg#icon-check-circle"></use>
          </svg>
          Security deposite required
        </li>
        <li>
          <svg className={s.svg} width="16" height="16">
            <use href="src/assets/sprite.svg#icon-check-circle"></use>
          </svg>
          Valid driverʼs license
        </li>
      </ul>
    </section>
  );
};

export default RentInfo;
