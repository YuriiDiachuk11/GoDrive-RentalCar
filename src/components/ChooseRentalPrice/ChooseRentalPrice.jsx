import React, { useState, useRef, useEffect } from "react";
import s from "./ChooseRentalPrice.module.css";
import { useDispatch } from "react-redux";
import { setRentalPrice } from "../../redux/slices/filterSlice.js";
import { handleSearchWithCurrentFilters } from "../../utils/handleSearch.js";

const ChooseRentalPrice = () => {
  const prices = [30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  const handleSelect = (price) => {
    setSelected(price);
    dispatch(setRentalPrice(price));
    setIsOpen(false);
  };

  const handleClear = (e) => {
    e.stopPropagation();
    setSelected(null);
    dispatch(setRentalPrice(""));
    setIsOpen(false);
    handleSearchWithCurrentFilters();
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatSelectedPrice = (price) => {
    if (price) {
      return `To $${price}`;
    }
    return "Choose a price";
  };

  return (
    <div className={s.container} ref={dropdownRef}>
      <div className={s.selectBox} onClick={() => setIsOpen(!isOpen)}>
        <span className={s.selectedText}>{formatSelectedPrice(selected)}</span>

        {selected && (
          <button
            className={s.clearBtn}
            onClick={handleClear}
            aria-label="Clear price"
          >
            ×
          </button>
        )}

        <svg
          className={`${s.svg} ${isOpen ? s.rotate : ""}`}
          width="16"
          height="16"
        >
          <use href="/assets/sprite.svg#icon-vector-upcopy"></use>
        </svg>
      </div>

      {isOpen && (
        <ul className={`${s.dropdown} ${isOpen ? s.dropdownVisible : ""}`}>
          {prices.map((price) => (
            <li
              key={price}
              className={s.option}
              onClick={() => handleSelect(price)}
            >
              {price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChooseRentalPrice;
