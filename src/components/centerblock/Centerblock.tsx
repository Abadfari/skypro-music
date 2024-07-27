import { TrackType } from "@/types";
import Filter from "../filter/Filter";
import PlaylistContent from "../playlist-content/PlaylistContent";
import Search from "../search/Search";
import s from "./Centerblock.module.css";

const Centerblock = ({
  tracks,
  title,
}: {
  tracks: TrackType[];
  title: string;
}) => {
  return (
    <div className={s.mainCenterblock}>
      <Search />
      <h2 className={s.centerblockH2}>{title}</h2>
      <Filter tracks={tracks} />
      <PlaylistContent tracks={tracks} />
    </div>
  );
};

export default Centerblock;
