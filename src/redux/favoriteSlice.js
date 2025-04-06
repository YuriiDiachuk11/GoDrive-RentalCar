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
        localStorage.setItem(
          "favoriteCars",
          JSON.stringify(state.favoriteCars)
        );
      }
    },
    deleteFavoriteCar: (state, action) => {
      state.favoriteCars = state.favoriteCars.filter(
        (car) => car.id !== action.payload
      );
      localStorage.setItem("favoriteCars", JSON.stringify(state.favoriteCars));
    },
  },
});

export const { addFavoriteCar, deleteFavoriteCar } = favoriteSlice.actions;

export default favoriteSlice.reducer;
