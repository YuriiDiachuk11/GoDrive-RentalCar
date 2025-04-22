import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const getCars = async () => {
  try {
    const response = await axios.get("/cars");
    return response.data.cars;
  } catch (error) {
    console.error("Oops cars not found", error);
    return [];
  }
};

export const getCarById = async (id) => {
  try {
    const response = await axios.get(`/cars/${id}`);
    return response.data;
  } catch (error) {
    console.error("Oops, car not found", error);
    throw error;
  }
};

export const getBrands = async () => {
  try {
    const response = await axios.get("/brands");
    return response.data;
  } catch (error) {
    console.error("Brands are absent", error);
    throw error;
  }
};

export const getFilteredCars = async (filters) => {
  try {
    const { brand, rentalPrice, minMileage, maxMileage } = filters;

    const params = {};

    if (brand) params.brand = brand;
    if (rentalPrice) params.rentalPrice = rentalPrice;
    if (minMileage) params.minMileage = minMileage;
    if (maxMileage) params.maxMileage = maxMileage;

    const response = await axios.get("/cars", { params });

    return response.data.cars;
  } catch (error) {
    console.error("Cars are busy now, try again later", error);
    throw error;
  }
};

export const getMoreCars = createAsyncThunk(
  "cars/getCarMore",
  async ({ page, limit, filters }, { rejectWithValue }) => {
    try {
      const res = await fetchCarsApi({ page, limit, filters });
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCarsApi = async ({ page, limit, filters }) => {
  const response = await axios.get("/cars", {
    params: { page, limit, ...filters },
  });

  return {
    cars: response.data.cars,
    totalPages: response.data.totalPages,
  };
};
