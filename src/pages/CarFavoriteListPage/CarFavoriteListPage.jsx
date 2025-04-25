import { useSelector } from "react-redux";
import s from "./CarFavoriteListPage.module.css";
import CarItem from "../../components/CarItem/CarItem.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";

const CarFavoriteListPage = () => {
  const favoriteCars = useSelector((state) => state.favorites.favoriteCars);

  return (
    <div className={s.wrapper}>
      <Navigation />
      <h2 className={s.title}>Your Favorite Cars 🚗</h2>
      {favoriteCars.length === 0 ? (
        <p className={s.empty}>No favorite cars yet 🙉</p>
      ) : (
        <ul className={s.list}>
          {favoriteCars.map((car) => (
            <li key={car.id}>
              <CarItem car={car} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CarFavoriteListPage;
