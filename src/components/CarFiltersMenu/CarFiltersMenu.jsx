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
  selectError,
  selectFilteredCars,
} from "../../redux/selectors/selectors.js";
import { fetchFilteredCars } from "../../redux/filterSlice.js";
import { fetchCars } from "../../redux/carsSlice.js";
import { toast } from "react-toastify";

const CarFiltersMenu = () => {
  const [brands, setBrands] = useState([]);
  const dispatch = useDispatch();

  const brand = useSelector(selectBrand);
  const rentalPrice = useSelector(selectRentalPrice);
  const minMileage = useSelector(selectMinMileage);
  const maxMileage = useSelector(selectMaxMileage);
  const filteredCars = useSelector(selectFilteredCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const hasSearched = useRef(false);
  const [isSearchCompleted, setIsSearchCompleted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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

  useEffect(() => {
    if (
      !brand &&
      !rentalPrice &&
      (minMileage === "" || minMileage === undefined) &&
      (maxMileage === "" || maxMileage === undefined)
    ) {
      return;
    }

    const timer = setTimeout(() => {
      const filters = {
        ...(brand && { brand }),
        ...(rentalPrice && { rentalPrice }),
        ...(minMileage && { minMileage }),
        ...(maxMileage && { maxMileage }),
      };

      dispatch(fetchFilteredCars(filters));
      hasSearched.current = false;
      setIsSearchCompleted(false);
      setShowSuccess(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [brand, rentalPrice, minMileage, maxMileage, dispatch]);

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

    dispatch(fetchFilteredCars(filters));
    hasSearched.current = true;
    setIsSearchCompleted(false);
    setShowSuccess(false);
  };

  useEffect(() => {
    if (!isLoading && isSearchCompleted === false) {
      if (hasSearched.current) {
        if (filteredCars.length === 0) {
          toast.error("No cars found");
          setShowSuccess(false);
        } else {
          toast.success("You found what you wanted, Bravo 🎉 🎉 🎉");
          setShowSuccess(true);
        }
        setIsSearchCompleted(true);
        hasSearched.current = false;
      }
    }
  }, [filteredCars, isLoading]);

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
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default CarFiltersMenu;
