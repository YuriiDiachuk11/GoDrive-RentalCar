import React from "react";
import s from "./MileageFilter.module.css";
import { useDispatch } from "react-redux";
import { setMaxMileage, setMinMileage } from "../../redux/filterSlice.js";
const MileageFilter = () => {
  const dispatch = useDispatch();
  const handleChangeMin = (e) => {
    dispatch(setMinMileage(e.target.value));
  };
  const handleChangeMax = (e) => {
    dispatch(setMaxMileage(e.target.value));
  };
  return (
    <div>
      <div className={s.mileageBox}>
        <label className={s.label} htmlFor="">
          Car mileage / km
        </label>
        <div className={s.FromToBox}>
          <input
            onChange={handleChangeMin}
            className={s.inputFrom}
            type="number"
            name="mileageFrom"
            id="mileageFrom"
            placeholder="From"
            min="0"
          />
          <input
            onChange={handleChangeMax}
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
