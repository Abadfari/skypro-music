import { ChangeEvent } from "react";
import s from "./Search.module.css";
import { useAppDispatch } from "@/store/store";
import { setFilter } from "@/store/features/playlistSlice";

const Search = () => {
  const dispatch = useAppDispatch();
  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    dispatch(setFilter({ searchValue: e.target.value }));
  }

  return (
    <div className={s.centerblockSearch}>
      <svg className={s.searchSvg}>
        <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
      </svg>
      <input
        onChange={handleSearch}
        className={s.searchText}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  );
};

export default Search;
