import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const getCars = async () => {
  try {
    const response = await axios.get("/cars");
    return response.data.cars;
  } catch (error) {
    console.error("Oops cars not found", error);
    throw error;
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
    console.log("Fetched brands:", response.data);
    return response.data;
  } catch (error) {
    console.error("Brands are absent", error);
    throw error;
  }
};
