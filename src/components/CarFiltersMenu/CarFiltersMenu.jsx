import React, { useEffect, useState } from "react";
import s from "./CarFiltersMenu.module.css";
import { getBrands } from "../../services/api.js";
import ChooseBrand from "../ChooseBrand/ChooseBrand.jsx";
import ChooseRentalPrice from "../ChooseRentalPrice/ChooseRentalPrice.jsx";
import MileageFilter from "../MileageFilter/MileageFilter.jsx";

const CarFiltersMenu = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const fetchedBrands = await getBrands();
        setBrands(fetchedBrands);
      } catch (error) {
        console.error("Brands are absent today", error);
      }
    };
    fetchBrands();
  }, []);
  return (
    <form className={s.form}>
      <div className={s.carBrandBox}>
        <label className={s.label} htmlFor="">
          Car brand
        </label>
        <ChooseBrand brands={brands} />
      </div>
      <div className={s.carPriceBox}>
        <label className={s.label} htmlFor="">
          Price/ 1 hour
        </label>
        <ChooseRentalPrice />
      </div>
      <MileageFilter />
      <button className={s.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default CarFiltersMenu;
