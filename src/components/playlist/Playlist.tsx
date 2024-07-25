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
      {tracks.length ? (
        tracks?.map((track, index) => (
          <Track
            track={track}
            setCurrentTrack={() => handleTrack(track)}
            {...track}
            key={index}
          />
        ))
      ) : (
        <span className={s.undefined}>Треки не найдены</span>
      )}
    </div>
  );
};

export default Playlist;
