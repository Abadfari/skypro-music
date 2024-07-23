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
    <>
      <div
        onClick={() => handleFilterClick(title)}
        className={clsx(s.filterButton, s.btnText)}
      >
        {title}
      </div>
      {isOpened && (
        <ul>
          {list.map((item) => (
            <li key={item}>{list}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FilterList;
