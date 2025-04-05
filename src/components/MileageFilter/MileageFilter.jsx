import React from "react";
import s from "./MileageFilter.module.css";
const MileageFilter = () => {
  return (
    <div>
      <div className={s.mileageBox}>
        <label className={s.label} htmlFor="">
          Car mileage / km
        </label>
        <div className={s.FromToBox}>
          <input
            className={s.inputFrom}
            type="number"
            name="mileageFrom"
            id="mileageFrom"
            placeholder="From"
            min="0"
          />
          <input
            className={s.inputTo}
            type="number"
            name="mileageTo"
            id="mileageTo"
            placeholder="To"
            min="0"
          />
        </div>
      </div>
    </div>
  );
};

export default MileageFilter;
