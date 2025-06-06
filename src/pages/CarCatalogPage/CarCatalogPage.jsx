import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCars,
  selectIsLoading,
  selectError,
  selectPage,
  selectTotalPages,
} from "../../redux/selectors/selectors.js";
import Navigation from "../../components/Navigation/Navigation.jsx";
import CarFiltersMenu from "../../components/CarFiltersMenu/CarFiltersMenu.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import CarList from "../../components/CarList/CarList.jsx";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn.jsx";
import { resetFilters } from "../../redux/slices/filterSlice.js";
import { fetchCars } from "../../redux/operations/carsOperations.js";

const CarCatalogPage = () => {
  const dispatch = useDispatch();

  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCars({ page, limit: 10 }));
  }, [dispatch, page]);

  const shouldShowLoadMore = page < totalPages;

  return (
    <div>
      <Navigation />
      <CarFiltersMenu />

      {isLoading ? <Loader /> : <CarList />}

      {error && <p>Error: {error}</p>}

      {shouldShowLoadMore && !isLoading && <LoadMoreBtn />}
    </div>
  );
};

export default CarCatalogPage;
