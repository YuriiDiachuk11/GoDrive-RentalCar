import React from "react";
import s from "./CarHomeTitle.module.css";
import { useNavigate } from "react-router-dom";

const CarHomeTitle = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/catalog");
  };
  return (
    <div className={s.container}>
      <div className={s.box}>
        <div className={s.textBox}>
          <h1 className={s.title}>Find your perfect rental car</h1>
          <p className={s.text}>
            Reliable and budget-friendly rental for any journey
          </p>
        </div>
        <button className={s.button} type="button" onClick={handleButtonClick}>
          View Catalog
        </button>
      </div>
    </div>
  );
};

export default CarHomeTitle;
