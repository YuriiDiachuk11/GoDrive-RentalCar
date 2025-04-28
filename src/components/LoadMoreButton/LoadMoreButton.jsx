import { useDispatch, useSelector } from "react-redux";
import {
  selectPage,
  selectTotalPages,
} from "../../redux/selectors/selectors.js";
import { setPage } from "../../redux/slices/carsSlice.js";
import s from "./LoadMoreButton.module.css";

const LoadMore = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);
  const page = useSelector(selectPage);

  console.log("Current page:", page);
  console.log("Total pages:", totalPages);

  if (totalPages === undefined || page >= totalPages) return null;

  return (
    <div className={s.container}>
      <button className={s.button} onClick={() => dispatch(setPage(page + 1))}>
        Load more
      </button>
    </div>
  );
};
export default LoadMore;
