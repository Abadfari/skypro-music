import Filter from "../filter/Filter";
import PlaylistContent from "../playlist-content/PlaylistContent";
import Search from "../search/Search";

const Centerblock = () => {
  return (
    <div className="main__centerblock centerblock">
      <Search />
      <h2 className="centerblock__h2">Треки</h2>
      <Filter />
      <PlaylistContent />
    </div>
  );
};

export default Centerblock;
