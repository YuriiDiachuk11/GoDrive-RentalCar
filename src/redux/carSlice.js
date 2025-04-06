import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCars } from "../services/api.js";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (_, { rejectWithValue }) => {
    try {
      const cars = await getCars();
      return cars;
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
  },
  reducers: {
    loadCars: (state, action) => {
      state.cars = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default carsSlice.reducer;
