import { TrackType } from "@/types";
import Track from "../track/Track";
import s from "./Playlist.module.css";
import { setCurrentTrack, setPlaylist } from "@/store/features/playlistSlice";
import { useAppDispatch } from "@/store/store";

const Playlist = ({ tracks }: { tracks: TrackType[] }) => {
  const dispatch = useAppDispatch();
  function handleTrack(track: TrackType) {
    dispatch(setCurrentTrack(track));
    dispatch(setPlaylist(tracks));
  }
  return (
    <div className={s.contentPlaylist}>
      {tracks?.map((track, index) => (
        <Track
          setCurrentTrack={() => handleTrack(track)}
          {...track}
          key={index}
        />
      ))}
    </div>
  );
};

export default Playlist;
