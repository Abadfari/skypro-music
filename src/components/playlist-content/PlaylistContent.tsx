import clsx from "clsx";
import Playlist from "../playlist/Playlist";
import s from "./PlaylistContent.module.css";
import { TrackType } from "@/types";

const PlaylistContent = ({ tracks, setCurrentTrack }: { tracks: TrackType[], setCurrentTrack: (param: TrackType) => void }) => {
  return (
    <div className={s.centerblockContent}>
      <div className={s.contentTitle}>
        <div className={clsx(s.playlistTitleCol, s.col01)}>Трек</div>
        <div className={clsx(s.playlistTitleCol, s.col02)}>Исполнитель</div>
        <div className={clsx(s.playlistTitleCol, s.col03)}>Альбом</div>
        <div className={clsx(s.playlistTitleCol, s.col04)}>
          <svg className={s.playlistTitleSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </svg>
        </div>
      </div>
      <Playlist setCurrentTrack={setCurrentTrack} tracks={tracks} />
    </div>
  );
};

export default PlaylistContent;
