import React from "react";
import { v4 as uuidv4 } from "uuid";
import CarItem from "../CarItem/CarItem.jsx";
import s from "./CarList.module.css";
import { useSelector } from "react-redux";
import { selectCars } from "../../redux/selectors/selectors.js";

const CarList = () => {
  const cars = useSelector(selectCars);

  return (
    <ul className={s.list}>
      {cars.map((car) => (
        <CarItem key={uuidv4()} car={car} />
      ))}
    </ul>
  );
};

export default CarList;
