import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import CarCatalogPage from "../../pages/CarCatalogPage/CarCatalogPage.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CarCatalogPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
