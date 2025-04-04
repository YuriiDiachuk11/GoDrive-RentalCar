import React, { useState } from "react";
import s from "./CarItem.module.css";

const CarItem = ({ car }) => {
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  const goodAddress = car.address.split(", ");
  const city = goodAddress[goodAddress.length - 2];
  const country = goodAddress[goodAddress.length - 1];

  return (
    <div className={s.container}>
      <div className={s.imageBox}>
        <img
          onClick={toggleLike}
          className={`${s.icon} ${isLiked ? s.likedImage : ""}`}
          src={car.img}
          alt={car.model}
        />
        <svg
          onClick={toggleLike}
          className={`${s.svg} ${isLiked ? s.liked : ""}`}
          width="16"
          height="16"
        >
          <use href="src/assets/sprite.svg#icon-heart"></use>
        </svg>
      </div>
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
