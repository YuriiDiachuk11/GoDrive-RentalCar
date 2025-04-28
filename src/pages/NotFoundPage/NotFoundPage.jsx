import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const PageNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={s.container}>
      <div className={s.content}>
        <h1 className={s.title}>🚨 404 — Page Not Found</h1>
        <p className={s.text}>
          Oops! Looks like this page doesn't exist.
          <br />
          You’ll be redirected to the homepage shortly.
        </p>
        <button
          className={s.button}
          onClick={() => navigate("/", { replace: true })}
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
