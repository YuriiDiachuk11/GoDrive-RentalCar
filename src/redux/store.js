import { configureStore } from "@reduxjs/toolkit";

import carSliceReducer from "./slices/carsSlice.js";
import filterReducer from "./slices/filterSlice.js";
import favoriteReducer from "./slices/favoriteSlice.js";

const store = configureStore({
  reducer: {
    cars: carSliceReducer,
    filters: filterReducer,
    favorites: favoriteReducer,
  },
});

export default store;
