import React, { useEffect, useRef, useState } from "react";
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
  selectIsLoading,
  selectCars,
} from "../../redux/selectors/selectors.js";
import { fetchCars } from "../../redux/carsSlice.js";
import { toast } from "react-toastify";

const CarFiltersMenu = () => {
  const [brands, setBrands] = useState([]);
  const dispatch = useDispatch();

  const brand = useSelector(selectBrand);
  const rentalPrice = useSelector(selectRentalPrice);
  const minMileage = useSelector(selectMinMileage);
  const maxMileage = useSelector(selectMaxMileage);
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);

  const hasSearched = useRef(false);
  const [isSearchCompleted, setIsSearchCompleted] = useState(false);

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

    dispatch(fetchCars({ page: 1, limit: 12 }));
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !brand &&
      !rentalPrice &&
      (minMileage === "" || minMileage === undefined) &&
      (maxMileage === "" || maxMileage === undefined)
    ) {
      toast.error("Please select at least one filter.");
      return;
    }

    const filters = {
      ...(brand && { brand }),
      ...(rentalPrice && { rentalPrice }),
      ...(minMileage && { minMileage }),
      ...(maxMileage && { maxMileage }),
    };

    dispatch(fetchCars({ page: 1, limit: 12, filters }));
    hasSearched.current = true;
    setIsSearchCompleted(false);
  };

  useEffect(() => {
    if (!isLoading && isSearchCompleted === false) {
      if (hasSearched.current) {
        if (cars.length === 0) {
          toast.error("Sorry, nothing found");
        } else {
          toast.success("You got what you want 🎉");
        }
        setIsSearchCompleted(true);
        hasSearched.current = false;
      }
    }
  }, [cars, isLoading]);

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

      <button className={s.button} type="submit" disabled={isLoading}>
        {isLoading ? "Searching..." : "Search 🔍"}
      </button>
    </form>
  );
};

export default CarFiltersMenu;
