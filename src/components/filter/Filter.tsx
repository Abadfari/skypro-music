import clsx from "clsx";
import s from "./Filter.module.css";

const Filter = () => {
  return (
    <div className={s.centerblockFilter}>
      <div className={s.filterTitle}>Искать по:</div>
      <div className={clsx(s.filterButton, s.btnText)}>исполнителю</div>
      <div className={clsx(s.filterButton, s.btnText)}>году выпуска</div>
      <div className={clsx(s.filterButton, s.btnText)}>жанру</div>
    </div>
  );
};

export default Filter;
