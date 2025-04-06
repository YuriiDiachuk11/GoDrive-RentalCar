import React from "react";
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

    return filteredCars.length > 0 ? filteredCars : selectCars(state);
  });

  return (
    <div>
      <ul className={s.list}>
        {cars.length > 0 ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>No cars found</p>
        )}
      </ul>
    </div>
  );
};

export default CarList;
