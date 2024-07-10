import clsx from "clsx";
import s from "./FilterList.module.css";
import { FC } from "react";

type FilterListType = {
  title: string;
  list: string[];
  handleFilterClick: (newFilter: string) => void;
  isOpened: boolean;
};

const FilterList: FC<FilterListType> = ({
  handleFilterClick,
  title,
  list,
  isOpened,
}) => {
  return (
    <div className={s.wrapperBtn}>
      <div
        onClick={() => handleFilterClick(title)}
        className={clsx(s.filterButton, s.btnText, {
          [s.btnTextOpen]: isOpened,
        })}
      >
        {title}
      </div>
      {isOpened && (
        <div className={s.filterListSt}>
          <ul className={s.filterList}>
            {list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterList;
