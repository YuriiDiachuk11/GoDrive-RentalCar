import React, { useEffect, useState } from "react";
import CarInfo from "../../components/CarInfo/CarInfo.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import RentInfo from "../../components/RentInfo/RentInfo.jsx";
import CarSpecifications from "../../components/CarSpecifications/CarSpecifications.jsx";
import { getCarById } from "../../services/api.js";
import Loader from "../../components/Loader/Loader.jsx";
import { useParams } from "react-router-dom";
import RentForm from "../../components/RentForm/RentForm.jsx";
import Accessories from "../../components/Accessories/Accessories.jsx";

const CarFavouritePage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const getCar = async () => {
      try {
        const carData = await getCarById(id);
        setCar(carData);
      } catch (error) {
        console.error("Sorry we can't find the car", error);
      }
    };
    getCar();
  }, [id]);

  if (!car) return <Loader />;
  return (
    <div>
      <Navigation />
      <CarInfo car={car} />
      <RentInfo />
      <CarSpecifications car={car} />
      <Accessories car={car} />
      <RentForm />
    </div>
  );
};

export default CarFavouritePage;
