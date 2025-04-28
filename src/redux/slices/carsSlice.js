import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "../operations/carsOperations.js";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    isLoading: false,
    error: null,
    totalPages: null,
    page: 1,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    resetCars: (state) => {
      state.cars = [];
      state.page = 1;
      state.totalPages = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        const { cars, totalPages } = action.payload;
        if (state.page === 1) {
          state.cars = cars;
        } else {
          state.cars.push(...cars);
        }
        state.totalPages = totalPages;
        state.isLoading = false;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setPage, resetCars } = carsSlice.actions;
export default carsSlice.reducer;
