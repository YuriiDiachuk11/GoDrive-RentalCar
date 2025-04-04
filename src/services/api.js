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
