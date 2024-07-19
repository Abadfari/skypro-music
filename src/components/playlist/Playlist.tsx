import { TrackType } from "@/types";
import Track from "../track/Track";
import s from "./Playlist.module.css";

const Playlist = ({ tracks }: { tracks: TrackType[] }) => {
  return (
    <div className={s.contentPlaylist}>
      {tracks.map((track, index) => (
        <Track {...track} key={index} />
      ))}
    </div>
  );
};

export default Playlist;
