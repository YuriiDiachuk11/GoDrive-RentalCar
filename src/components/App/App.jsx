import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import CarCatalogPage from "../../pages/CarCatalogPage/CarCatalogPage.jsx";
import CarFavouritePage from "../../pages/CarFavouritePage/CarFavouritePage.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CarCatalogPage />} />
          <Route path="/catalog/:id" element={<CarFavouritePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
