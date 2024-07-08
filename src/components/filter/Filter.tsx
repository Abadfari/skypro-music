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

// TODO: создать еще один компонент FilterList, который будети отдавать опции, а принимать список фильтра

// TODO: создать state вот здесь, он будет иметь по дефолту значение null, еще три значения которые он будет принимать "authors/genros/years", в зависимости от значения состояния будет отображатся тот или иной список фильтра
