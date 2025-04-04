import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Navigation.jsx";
import CarFiltersMenu from "../../components/CarFiltersMenu/CarFiltersMenu.jsx";
import CarList from "../../components/CarList/CarList.jsx";
import { getCars } from "../../services/api.js";

const CarCatalogPage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCars();
        setCars(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <Navigation />
      <CarFiltersMenu />
      <CarList cars={cars} />
    </div>
  );
};

export default CarCatalogPage;
