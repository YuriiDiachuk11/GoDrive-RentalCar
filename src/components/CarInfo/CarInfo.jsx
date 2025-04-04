import React from "react";

import s from "./CarInfo.module.css";

const CarInfo = ({ car }) => {
  const goodAddress = car.address.split(", ");
  const city = goodAddress[goodAddress.length - 2];
  const country = goodAddress[goodAddress.length - 1];

  return (
    <div className={s.container}>
      <img className={s.image} src={car.img} alt={car.model} />
      <div className={s.box}>
        <div className={s.infoBox}>
          <h1 className={s.title}>
            {car.brand} {car.model}, {car.year}
          </h1>
          <div className={s.mileageAndAddressBox}>
            <p className={s.address}>
              {city}, {country}
            </p>
            <p className={s.mileage}>
              Mileage: {car.mileage.toLocaleString("uk-UA")} км
            </p>
          </div>
          <p className={s.price}>${car.rentalPrice}</p>
        </div>
        <p className={s.description}>{car.description}</p>
      </div>
    </div>
  );
};

export default CarInfo;
