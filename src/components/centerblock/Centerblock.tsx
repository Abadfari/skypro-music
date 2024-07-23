import { TrackType } from "@/types";
import Filter from "../filter/Filter";
import PlaylistContent from "../playlist-content/PlaylistContent";
import Search from "../search/Search";
import s from "./Centerblock.module.css";

const Centerblock = ({ tracks, setCurrentTrack }: { tracks: TrackType[], setCurrentTrack: (param: TrackType) => void }) => {
  return (
    <div className={s.mainCenterblock}>
      <Search />
      <h2 className={s.centerblockH2}>Треки</h2>
      <Filter tracks={tracks} />
      <PlaylistContent setCurrentTrack={setCurrentTrack} tracks={tracks} />
    </div>
  );
};

export default Centerblock;
