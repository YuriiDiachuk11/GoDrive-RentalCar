import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCarsApi, getMoreCars } from "../services/api.js";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async ({ page, limit, filters }, { rejectWithValue }) => {
    try {
      const res = await fetchCarsApi({ page, limit, filters });
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
    setCars: (state, action) => {
      state.cars = action.payload;
    },
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

export default carsSlice.reducer;
export const { setPage, resetCars } = carsSlice.actions;
