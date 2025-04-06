import React, { useState } from "react";
import s from "./MileageFilter.module.css";
import { useDispatch } from "react-redux";
import { setMaxMileage, setMinMileage } from "../../redux/filterSlice.js";

const MileageFilter = () => {
  const dispatch = useDispatch();

  const [minMileage, setMinMileageState] = useState("From ");
  const [maxMileage, setMaxMileageState] = useState("To ");

  const handleChangeMin = (e) => {
    const value = e.target.value;

    if (value === "" || !isNaN(value.replace("From ", ""))) {
      setMinMileageState(value);
      dispatch(setMinMileage(value.replace("From ", "")));
    }
  };

  const handleChangeMax = (e) => {
    const value = e.target.value;
    if (value === "" || !isNaN(value.replace("To ", ""))) {
      setMaxMileageState(value);
      dispatch(setMaxMileage(value.replace("To ", "")));
    }
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
            type="text"
            name="mileageFrom"
            id="mileageFrom"
            value={minMileage}
            placeholder="From"
          />

          <input
            onChange={handleChangeMax}
            className={s.inputTo}
            type="text"
            name="mileageTo"
            id="mileageTo"
            value={maxMileage}
            placeholder="To"
          />
        </div>
      </div>
    </div>
  );
};

export default MileageFilter;
