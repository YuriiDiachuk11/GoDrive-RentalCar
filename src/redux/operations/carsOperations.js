import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCarsApi } from "../../services/api.js";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async ({ page, limit }, { getState, rejectWithValue }) => {
    try {
      const { filters } = getState();
      const response = await fetchCarsApi({ page, limit, filters });
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
