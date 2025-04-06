import React, { useEffect, useState } from "react";
import s from "./CarFiltersMenu.module.css";
import { getBrands } from "../../services/api.js";
import ChooseBrand from "../ChooseBrand/ChooseBrand.jsx";
import ChooseRentalPrice from "../ChooseRentalPrice/ChooseRentalPrice.jsx";
import MileageFilter from "../MileageFilter/MileageFilter.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBrand,
  selectMaxMileage,
  selectMinMileage,
  selectRentalPrice,
} from "../../redux/selectors/selectors.js";
import { fetchFilteredCars } from "../../redux/filterSlice.js";
import { fetchCars } from "../../redux/carsSlice.js";

const CarFiltersMenu = () => {
  const [brands, setBrands] = useState([]);
  const dispatch = useDispatch();

  const brand = useSelector(selectBrand);
  const rentalPrice = useSelector(selectRentalPrice);
  const minMileage = useSelector(selectMinMileage);
  const maxMileage = useSelector(selectMaxMileage);

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

    dispatch(fetchCars());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const filters = {
      brand,
      rentalPrice,
      minMileage,
      maxMileage,
    };

    dispatch(fetchFilteredCars(filters));
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.carBrandBox}>
        <label className={s.label}>Car brand</label>
        <ChooseBrand brands={brands} />
      </div>

      <div className={s.carPriceBox}>
        <label className={s.label}>Price/ 1 hour</label>
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
