import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFilteredCars } from "../services/api";

export const fetchFilteredCars = createAsyncThunk(
  "filters/fetchFilteredCars",
  async (filters, { rejectWithValue }) => {
    try {
      const cars = await getFilteredCars(filters);
      return cars;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
    isLoading: false,
    error: null,
    cars: [],
    hasSearched: false,
  },
  reducers: {
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setRentalPrice: (state, action) => {
      state.rentalPrice = action.payload;
    },
    setMinMileage: (state, action) => {
      state.minMileage = action.payload;
    },
    setMaxMileage: (state, action) => {
      state.maxMileage = action.payload;
    },
    resetFilters: (state) => {
      state.brand = "";
      state.rentalPrice = "";
      state.minMileage = "";
      state.maxMileage = "";
      state.cars = [];
      state.hasSearched = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilteredCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFilteredCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload;
        state.hasSearched = true;
      })
      .addCase(fetchFilteredCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setBrand,
  setRentalPrice,
  setMinMileage,
  setMaxMileage,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
