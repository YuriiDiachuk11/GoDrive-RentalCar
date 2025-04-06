import React from "react";
import s from "./ChooseBrand.module.css";
import { useDispatch } from "react-redux";
import { setBrand } from "../../redux/filterSlice.js";

const ChooseBrand = ({ brands }) => {
  const dispatch = useDispatch();
  const handleChangeBrand = (e) => {
    dispatch(setBrand(e.target.value));
  };
  return (
    <div className={s.container}>
      <select
        onChange={handleChangeBrand}
        className={s.selectBrand}
        name="brand"
        id="brand"
      >
        <option value="">Choose a brand</option>
        {brands.map((brand) => {
          return (
            <option key={brand} value={brand}>
              {brand}
            </option>
          );
        })}
      </select>
      <svg className={s.svg} width="16" height="16">
        <use href="/assets/sprite.svg#icon-vector-upcopy"></use>
      </svg>
    </div>
  );
};

export default ChooseBrand;
