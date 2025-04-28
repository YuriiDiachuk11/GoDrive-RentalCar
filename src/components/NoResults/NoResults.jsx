import React from "react";
import s from "./NoResults.module.css";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../redux/slices/filterSlice.js";
const NoResults = ({ message = "🚫 Nothing found for your query" }) => {
  const dispatch = useDispatch();

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <div className={s.noResults}>
      <p className={s.emoji}>😞</p>
      <p className={s.text}>{message}</p>
      <button className={s.button} onClick={handleResetFilters}>
        Reset filters 🔄
      </button>
    </div>
  );
};

export default NoResults;
