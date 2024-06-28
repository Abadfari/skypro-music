import s from "./Search.module.css";

const Search = () => {
  return (
    <div className={s.centerblockSearch}>
      <svg className={s.searchSvg}>
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </svg>
      <input
        className={s.searchText}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  );
};

export default Search;
