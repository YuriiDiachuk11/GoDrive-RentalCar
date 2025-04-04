import React from "react";
import CarItem from "../CarItem/CarItem.jsx";

const CarList = ({ cars }) => {
  return (
    <div>
      <ul>
        {cars.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}
      </ul>
    </div>
  );
};

export default CarList;
