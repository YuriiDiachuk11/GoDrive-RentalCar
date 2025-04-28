import { fetchCars } from "../redux/slices/carsSlice.js";
import store from "../redux/store.js";

export const handleSearchWithCurrentFilters = () => {
  const state = store.getState();
  const { brand, rentalPrice, minMileage, maxMileage } = state.filters;

  const filters = {};
  if (brand) filters.brand = brand;
  if (rentalPrice) filters.rentalPrice = rentalPrice;
  if (minMileage) filters.minMileage = minMileage;
  if (maxMileage) filters.maxMileage = maxMileage;

  store.dispatch(fetchCars({ page: 1, limit: 12, filters }));
};
