import React, { useEffect, useState } from "react";
import s from "./CarItem.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteCar,
  deleteFavoriteCar,
} from "../../redux/favoriteSlice.js";

const CarItem = ({ car }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const favoriteCars = useSelector(
    (state) => state.favorites.favoriteCars || []
  );

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const isCarLiked = favoriteCars.some(
      (favoriteCar) => favoriteCar.id === car.id
    );
    setIsLiked(isCarLiked);
  }, [favoriteCars, car.id]);

  const handleButtonClick = () => {
    navigate(`/catalog/${car.id}`);
  };

  const toggleLike = () => {
    if (isLiked) {
      dispatch(deleteFavoriteCar(car.id));
    } else {
      dispatch(addFavoriteCar(car));
    }
  };

  const goodAddress = car.address.split(", ");
  const city = goodAddress[goodAddress.length - 2];
  const country = goodAddress[goodAddress.length - 1];

  return (
    <div className={s.container}>
      <div className={s.imageBox}>
        <img
          className={`${s.icon} ${isLiked ? s.likedImage : ""}`}
          src={car.img}
          alt={car.model}
        />
        <svg onClick={toggleLike} className={`${s.svg}`} width="16" height="16">
          {isLiked ? (
            <use href="/assets/sprite.svg#icon-active-heart" />
          ) : (
            <use href="/assets/sprite.svg#icon-heart" />
          )}
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
      <button onClick={handleButtonClick} className={s.button} type="button">
        Read more 📖
      </button>
    </div>
  );
};

export default CarItem;
