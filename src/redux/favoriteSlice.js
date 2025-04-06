import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteCars: JSON.parse(localStorage.getItem("favoriteCars")) || [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavoriteCar: (state, action) => {
      const existingCar = state.favoriteCars.find(
        (car) => car.id === action.payload.id
      );
      if (!existingCar) {
        state.favoriteCars.push(action.payload);
        try {
          localStorage.setItem(
            "favoriteCars",
            JSON.stringify(state.favoriteCars)
          );
        } catch (error) {
          console.error("Something went wrong bro, just sorry", error);
        }
      }
    },
    deleteFavoriteCar: (state, action) => {
      state.favoriteCars = state.favoriteCars.filter(
        (car) => car.id !== action.payload
      );
      try {
        localStorage.setItem(
          "favoriteCars",
          JSON.stringify(state.favoriteCars)
        );
      } catch (error) {
        console.error("Please try another time, local is busy", error);
      }
    },
  },
});

export const { addFavoriteCar, deleteFavoriteCar } = favoriteSlice.actions;

export default favoriteSlice.reducer;
