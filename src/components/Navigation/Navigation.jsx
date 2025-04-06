import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.menuItem, isActive && s.active);
};

const Navigation = () => {
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
      </div>
    </nav>
  );
};

export default Navigation;
