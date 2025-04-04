import React from "react";
import s from "./CarItem.module.css";

const CarItem = ({ car }) => {
  const goodAddress = car.address.split(", ");
  const city = goodAddress[goodAddress.length - 2];
  const country = goodAddress[goodAddress.length - 1];

  return (
    <div className={s.container}>
      <img className={s.icon} src={car.img} alt={car.model} />
      <div className={s.carBox}>
        <h3 className={s.title}>
          {car.brand}
          <a className={s.model} href="">
            {car.model}
          </a>
          , {car.year}
        </h3>
        <p className={s.price}>${car.rentalPrice}</p>
      </div>
      <div className={s.info}>
        <div className={s.addressRentalBox}>
          <p className={s.text}>
            {city} | {country}
          </p>
          <p className={s.text}> | {car.rentalCompany} | </p>
        </div>
        <div className={s.mileageBox}>
          <p className={s.text}>{car.type} | </p>
          <p className={s.text}>{car.mileage}</p>
        </div>
      </div>
      <button className={s.button} type="button">
        Read more
      </button>
    </div>
  );
};

export default CarItem;
