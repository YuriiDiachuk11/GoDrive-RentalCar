import { useDispatch, useSelector } from "react-redux";
import {
  selectCars,
  selectError,
  selectIsLoading,
  selectPage,
} from "../../redux/selectors/selectors.js";
import { fetchCars } from "../../redux/carsSlice.js";
import Navigation from "../../components/Navigation/Navigation.jsx";
import CarFiltersMenu from "../../components/CarFiltersMenu/CarFiltersMenu.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import CarList from "../../components/CarList/CarList.jsx";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn.jsx";
import { useEffect } from "react";

const CarCatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchCars({ page, limit: 6 }));
  }, [dispatch, page]);

  return (
    <div>
      <Navigation />
      <CarFiltersMenu />
      {isLoading ? <Loader /> : <CarList cars={cars} />}
      {error && <p>Error: {error}</p>}
      <LoadMoreBtn />
    </div>
  );
};

export default CarCatalogPage;
