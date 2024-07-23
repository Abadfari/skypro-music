import { TrackType } from "@/types";
import Filter from "../filter/Filter";
import PlaylistContent from "../playlist-content/PlaylistContent";
import Search from "../search/Search";
import s from "./Centerblock.module.css";

const Centerblock = ({ tracks, }: { tracks: TrackType[]}) => {
  return (
    <div className={s.mainCenterblock}>
      <Search />
      <h2 className={s.centerblockH2}>Треки</h2>
      <Filter tracks={tracks} />
      <PlaylistContent tracks={tracks} />
    </div>
  );
};

export default Centerblock;
