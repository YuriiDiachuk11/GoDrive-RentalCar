// store.js
import { configureStore } from "@reduxjs/toolkit";

import carSliceReducer from "./carSlice.js";

const store = configureStore({
  reducer: {
    cars: carSliceReducer,
  },
});

export default store;
