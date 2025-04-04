import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Navigation.jsx";
import CarFiltersMenu from "../../components/CarFiltersMenu/CarFiltersMenu.jsx";
import CarList from "../../components/CarList/CarList.jsx";
import { getCars } from "../../services/api.js";
import Loader from "../../components/Loader/Loader.jsx";
import s from "./CarCatalogPage.module.css";

const CarCatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await getCars();
        setIsLoading(false);
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
      {isLoading && <Loader />}
      <CarList cars={cars} />
      <div className={s.btnContainer}>
        <button className={s.button} type="button">
          Load More
        </button>
      </div>
    </div>
  );
};

export default CarCatalogPage;
