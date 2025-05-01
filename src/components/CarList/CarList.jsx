import React from "react";
import CarItem from "../CarItem/CarItem.jsx";
import s from "./CarList.module.css";
import { useSelector } from "react-redux";
import { selectCars } from "../../redux/selectors/selectors.js";

const CarList = () => {
  const cars = useSelector(selectCars);

  return (
    <div>
      {cars.length > 0 ? (
        <ul className={s.list}>
          {cars.map((car) => (
            <CarItem key={car.id} car={car} />
          ))}
        </ul>
      ) : (
        <p className={s.empty}>No cars found 🙅‍♂️</p>
      )}
    </div>
  );
};

export default CarList;
