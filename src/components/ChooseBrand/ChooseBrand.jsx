import React, { useState, useRef, useEffect } from "react";
import s from "./ChooseBrand.module.css";
import { useDispatch } from "react-redux";
import { setBrand } from "../../redux/filterSlice.js";

const ChooseBrand = ({ brands }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef(null);

  const handleSelect = (brand) => {
    setSelected(brand);
    dispatch(setBrand(brand));
    setIsOpen(false);
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

  return (
    <div className={s.container} ref={dropdownRef}>
      <div className={s.selectBox} onClick={() => setIsOpen(!isOpen)}>
        <span className={s.selectedText}>{selected || "Choose a brand"}</span>
        <svg
          className={`${s.svg} ${isOpen ? s.rotate : ""}`}
          width="16"
          height="16"
        >
          <use href="/assets/sprite.svg#icon-vector-upcopy"></use>
        </svg>
      </div>
      {isOpen && (
        <ul className={s.dropdown}>
          {brands.map((brand) => (
            <li
              key={brand}
              className={s.option}
              onClick={() => handleSelect(brand)}
            >
              {brand}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChooseBrand;
