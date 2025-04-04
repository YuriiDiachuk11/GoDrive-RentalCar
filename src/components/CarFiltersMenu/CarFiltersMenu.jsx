import React from "react";
import s from "./CarFiltersMenu.module.css";
import sprite from "../../assets/sprite.svg";

const CarFiltersMenu = () => {
  return (
    <form className={s.form}>
      <div className={s.carBrandBox}>
        <label className={s.label} htmlFor="">
          Car brand
        </label>
        <select className={s.select} name="Choose a brand" id="">
          <option className={s.option} value="">
            Choose a brand
          </option>
        </select>
      </div>
      <div className={s.carPriceBox}>
        <label className={s.label} htmlFor="">
          Price/ 1 hour
        </label>
        <select className={s.select} name="" id="">
          <option className={s.option} value="">
            Choose a price
          </option>
        </select>
      </div>
      <div className={s.mileageBox}>
        <label className={s.label} htmlFor="">
          Car mileage / km
        </label>
        <div className={s.FromToBox}>
          <select className={s.selectFrom} name="" id="">
            <option className={s.option} value="">
              From
            </option>
          </select>
          <select className={s.selectTo} name="" id="">
            <option className={s.option} value="">
              To
            </option>
          </select>
        </div>
      </div>
      <button className={s.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default CarFiltersMenu;
