import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./CarFavoriteListPage.module.css";
import CarItem from "../../components/CarItem/CarItem.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";

const CarFavoriteListPage = () => {
  const favoriteCars = useSelector((state) => state.favorites.favoriteCars);

  return (
    <div className={s.wrapper}>
      <Navigation />
      <h2 className={s.title}>Your wishes 🚗</h2>
      {favoriteCars.length === 0 ? (
        <div className={s.emptyBlock}>
          <p className={s.emptyText}>You have not add any car yet 🙉</p>
          <NavLink to="/catalog" className={s.catalogLink}>
            Browse catalog 🌍
          </NavLink>
        </div>
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
