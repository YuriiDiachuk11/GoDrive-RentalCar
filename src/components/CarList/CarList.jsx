import React from "react";
import CarItem from "../CarItem/CarItem.jsx";
import s from "./CarList.module.css";

const CarList = ({ cars }) => {
  return (
    <div>
      <ul className={s.list}>
        {cars.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}
      </ul>
    </div>
  );
};

export default CarList;
