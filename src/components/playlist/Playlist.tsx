import Track from "../track/Track";
import s from "./Playlist.module.css";

const Playlist = () => {
  return (
    <div className={s.contentPlaylist}>
      {Array(20)
        .fill({})
        .map((_, index) => (
          <Track key={index} />
        ))}
    </div>
  );
};

export default Playlist;
