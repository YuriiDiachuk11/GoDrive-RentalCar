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
  const cars = useSelector(selectCars);
  const filteredCars = useSelector(selectFilteredCars);
  const hasSearched = useSelector((state) => state.filters.hasSearched);

  const displayedCars =
    Array.isArray(filteredCars) && filteredCars.length > 0
      ? filteredCars
      : hasSearched
      ? []
      : cars;

  return (
    <div>
      {hasSearched && displayedCars.length === 0 ? (
        <div className={s.noResults}>
          <p>🚫 Nothing found for your query</p>
        </div>
      ) : (
        <ul className={s.list}>
          {displayedCars.map((car) => (
            <CarItem key={uuidv4()} car={car} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CarList;
