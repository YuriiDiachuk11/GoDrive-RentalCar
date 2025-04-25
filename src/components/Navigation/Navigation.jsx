import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import s from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.menuItem, isActive && s.active);
};

const Navigation = () => {
  const favoriteCount = useSelector(
    (state) => state.favorites.favoriteCars.length
  );

  return (
    <nav className={s.navigation}>
      <NavLink to="/">
        <img src="/Optimize-logo.svg" alt="RentalCar Logo" />
      </NavLink>
      <div className={s.menu}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/catalog">
          Catalog
        </NavLink>

        <NavLink className={buildLinkClass} to="/favorites">
          Favorites
          {favoriteCount > 0 && (
            <span className={s.counter}>{favoriteCount}</span>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
