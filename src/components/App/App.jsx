import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import Loader from "../Loader/Loader.jsx";
import { ToastContainer } from "react-toastify";

const HomePage = React.lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CarCatalogPage = React.lazy(() =>
  import("../../pages/CarCatalogPage/CarCatalogPage.jsx")
);
const CarFavouritePage = React.lazy(() =>
  import("../../pages/CarFavouritePage/CarFavouritePage.jsx")
);
const CarFavoriteListPage = React.lazy(() =>
  import("../../pages/CarFavoriteListPage/CarFavoriteListPage.jsx")
);
const PageNotFound = React.lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage.jsx")
);

const App = () => {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
      />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CarCatalogPage />} />
            <Route path="/catalog/:id" element={<CarFavouritePage />} />
          </Route>
          <Route path="/favorites" element={<CarFavoriteListPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
