import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import Loader from "../Loader/Loader.jsx";

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
      </Routes>
    </div>
  );
};

export default App;
