import React from "react";
import Navigation from "../../components/Navigation/Navigation.jsx";
import CarFiltersMenu from "../../components/CarFiltersMenu/CarFiltersMenu.jsx";

const CarCatalogPage = () => {
  return (
    <div>
      <Navigation />
      <CarFiltersMenu />
    </div>
  );
};

export default CarCatalogPage;
