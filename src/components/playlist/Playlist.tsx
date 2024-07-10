import { TrackType } from "@/types";
import Track from "../track/Track";
import s from "./Playlist.module.css";

const Playlist = ({ tracks,setCurrentTrack }: { tracks: TrackType[], setCurrentTrack: (param: TrackType) => void }) => {
  return (
    <div className={s.contentPlaylist}>
      {tracks.map((track, index) => (
        <Track setCurrentTrack={() => setCurrentTrack(track)} {...track} key={index} />
      ))}
    </div>
  );
};

export default Playlist;
