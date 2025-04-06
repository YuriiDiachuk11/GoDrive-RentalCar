import React from "react";
import { v4 as uuidv4 } from "uuid";
import CarItem from "../CarItem/CarItem.jsx";
import s from "./CarList.module.css";
import { useSelector } from "react-redux";
import {
  selectCars,
  selectFilteredCars,
} from "../../redux/selectors/selectors.js";

const CarList = () => {
  const cars = useSelector((state) => {
    const filteredCars = selectFilteredCars(state);

    return Array.isArray(filteredCars) && filteredCars.length > 0
      ? filteredCars
      : selectCars(state);
  });

  return (
    <div>
      <ul className={s.list}>
        {Array.isArray(cars) && cars.length > 0 ? (
          cars.map((car) => <CarItem key={uuidv4()} car={car} />)
        ) : (
          <p>No cars found</p>
        )}
      </ul>
    </div>
  );
};

export default CarList;
