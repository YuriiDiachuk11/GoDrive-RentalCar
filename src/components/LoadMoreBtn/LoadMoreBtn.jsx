import { useDispatch, useSelector } from "react-redux";
import {
  selectPage,
  selectTotalPages,
} from "../../redux/selectors/selectors.js";
import { setPage } from "../../redux/slices/carsSlice.js";
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  if (page >= totalPages) return null;

  return (
    <div className={s.container}>
      <button onClick={() => dispatch(setPage(page + 1))} className={s.button}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
