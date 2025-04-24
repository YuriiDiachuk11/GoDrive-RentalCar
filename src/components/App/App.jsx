import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import Loader from "../Loader/Loader.jsx";
import { ToastContainer } from "react-toastify";
import CarFavoriteListPage from "../../pages/CarFavoriteListPage/CarFavoriteListPage.jsx";

const HomePage = React.lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CarCatalogPage = React.lazy(() =>
  import("../../pages/CarCatalogPage/CarCatalogPage.jsx")
);
const CarFavouritePage = React.lazy(() =>
  import("../../pages/CarFavouritePage/CarFavouritePage.jsx")
);

const App = () => {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/catalog"
            element={
              <Suspense fallback={<Loader />}>
                <CarCatalogPage />
              </Suspense>
            }
          />
          <Route
            path="/catalog/:id"
            element={
              <Suspense fallback={<Loader />}>
                <CarFavouritePage />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/favorites"
          element={
            <Suspense fallback={<Loader />}>
              <CarFavoriteListPage />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
