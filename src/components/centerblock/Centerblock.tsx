import Filter from "../filter/Filter";
import PlaylistContent from "../playlist-content/PlaylistContent";
import Search from "../search/Search";
import s from "./Centerblock.module.css";

const Centerblock = () => {
  return (
    <div className={s.mainCenterblock}>
      <Search />
      <h2 className={s.centerblockH2}>Треки</h2>
      <Filter />
      <PlaylistContent />
    </div>
  );
};

export default Centerblock;
