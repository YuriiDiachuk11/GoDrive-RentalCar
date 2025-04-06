import { configureStore } from "@reduxjs/toolkit";

import carSliceReducer from "./carsSlice.js";
import filterReducer from "./filterSlice.js";
import favoriteReducer from "./favoriteSlice.js";

const store = configureStore({
  reducer: {
    cars: carSliceReducer,
    filters: filterReducer,
    favorites: favoriteReducer,
  },
});

export default store;
