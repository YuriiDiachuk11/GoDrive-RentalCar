export const selectCars = (state) => state.cars.cars;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;

export const selectFilters = (state) => state.filters;
export const selectBrand = (state) => state.filters.brand;
export const selectRentalPrice = (state) => state.filters.rentalPrice;
export const selectMinMileage = (state) => state.filters.minMileage;
export const selectMaxMileage = (state) => state.filters.maxMileage;
