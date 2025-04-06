import { configureStore } from "@reduxjs/toolkit";

import carSliceReducer from "./carsSlice.js";
import filterReducer from "./filterSlice.js";

const store = configureStore({
  reducer: {
    cars: carSliceReducer,
    filters: filterReducer,
  },
});

export default store;
