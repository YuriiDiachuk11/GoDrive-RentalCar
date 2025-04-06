import React, { useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation.jsx";
import CarFiltersMenu from "../../components/CarFiltersMenu/CarFiltersMenu.jsx";
import CarList from "../../components/CarList/CarList.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import s from "./CarCatalogPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCars,
  selectError,
  selectIsLoading,
} from "../../redux/selectors/selectors.js";
import { fetchCars } from "../../redux/carsSlice.js";

const CarCatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <CarFiltersMenu />
      {isLoading ? <Loader /> : <CarList cars={cars} />}
      {error && <p>Error: {error}</p>}
      <div className={s.btnContainer}>
        <button className={s.button} type="button">
          Load More
        </button>
      </div>
    </div>
  );
};

export default CarCatalogPage;
