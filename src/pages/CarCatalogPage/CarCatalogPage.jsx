import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCars,
  selectIsLoading,
  selectError,
  selectPage,
  selectTotalPages,
  selectFilteredCars,
} from "../../redux/selectors/selectors.js";
import { fetchCars } from "../../redux/carsSlice.js";
import Navigation from "../../components/Navigation/Navigation.jsx";
import CarFiltersMenu from "../../components/CarFiltersMenu/CarFiltersMenu.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import CarList from "../../components/CarList/CarList.jsx";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn.jsx";

const CarCatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const filteredCars = useSelector(selectFilteredCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const isFiltered = filteredCars.length > 0;

  useEffect(() => {
    dispatch(fetchCars({ page, limit: 10 }));
  }, [dispatch, page]);

  const shouldShowLoadMore = !isFiltered && page < totalPages;

  return (
    <div>
      <Navigation />
      <CarFiltersMenu />
      {isLoading ? <Loader /> : <CarList cars={cars} />}
      {error && <p>Error: {error}</p>}
      {shouldShowLoadMore && <LoadMoreBtn />}
    </div>
  );
};

export default CarCatalogPage;
