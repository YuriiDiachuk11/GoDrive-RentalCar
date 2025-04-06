import React, { useEffect, useState, useRef } from "react";
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
import { getMoreCars } from "../../services/api.js";

const CarCatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [page, setPage] = useState(1);
  const [hasMoreCars, setHasMoreCars] = useState(true);

  const buttonRef = useRef(null);

  const handleLoadMore = () => {
    if (hasMoreCars) {
      dispatch(getMoreCars({ page, limit: 6, filters: {} })).then((result) => {
        if (result.payload.data.length < 6) {
          setHasMoreCars(false);
        }
        setPage((prevPage) => prevPage + 1);

        buttonRef.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      });
    }
  };

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <CarFiltersMenu />
      {isLoading ? <Loader /> : <CarList cars={cars} />}
      {error && <p>Error: {error}</p>}

      {hasMoreCars && (
        <div className={s.btnContainer} ref={buttonRef}>
          <button onClick={handleLoadMore} className={s.button} type="button">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default CarCatalogPage;
