import React from "react";
import s from "./Accessories.module.css";

const Accessories = ({ car }) => {
  const newArray = [...car.accessories, ...car.functionalities];
  return (
    <section>
      <h2 className={s.title}>Accessories and functionalities:</h2>
      <ul className={s.list}>
        {newArray.map((item, index) => {
          return (
            <li className={s.item} key={index}>
              <svg className={s.svg} width="16" height="16">
                <use href="/assets/sprite.svg#icon-check-circle"></use>
              </svg>
              {item}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Accessories;
