import clsx from "clsx";
import s from "./FilterList.module.css";
import { FC } from "react";

type FilterListType = {
  title: string;
  list: string[];
  handleFilterClick: (newFilter: string) => void;
  isOpened: boolean;
  type: string;
  handleActiveFilter: (item: string) => void;
  filter: string[] | string;
};

const FilterList: FC<FilterListType> = ({
  handleFilterClick,
  title,
  list,
  isOpened,
  handleActiveFilter,
  filter,
  type,
}) => {
  return (
    <div className={s.wrapperBtn}>
      {type !== "order" && filter.length ? (
        <div className={s.filterLength}>{filter.length}</div>
      ) : null}
      <div
        onClick={() => handleFilterClick(title)}
        className={clsx(s.filterButton, s.btnText, {
          [s.btnTextOpen]: isOpened,
        })}
      >
        {title}
      </div>
      {isOpened && (
        <div className={s.filterListStyles}>
          <ul className={s.filterList}>
            {list.map((item) => (
              <li
                className={clsx(s.filterListItem, {
                  [s.active]:
                    typeof filter === "string"
                      ? item === filter
                      : filter?.includes(item),
                })}
                key={item}
                onClick={() => handleActiveFilter(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterList;
