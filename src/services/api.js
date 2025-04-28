import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const fetchCarsApi = async ({ page, limit, filters }) => {
  const { brand, rentalPrice, minMileage, maxMileage } = filters;

  const params = { page, limit };
  if (brand) params.brand = brand;
  if (rentalPrice) params.rentalPrice = rentalPrice;
  if (minMileage) params.minMileage = minMileage;
  if (maxMileage) params.maxMileage = maxMileage;

  const response = await axios.get("/cars", { params });

  return {
    cars: response.data.cars,
    totalPages: response.data.totalPages,
  };
};

export const getCarById = async (id) => {
  const response = await axios.get(`/cars/${id}`);
  return response.data;
};

export const getBrands = async () => {
  const response = await axios.get("/brands");
  return response.data;
};
