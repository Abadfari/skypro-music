// TODO: сделать сдили для иконок текущщего трека

import { FC } from "react";
import s from "./Track.module.css";
import { formatTrackTime } from "@/lib/formatTrackTime";
import { useAppSelector } from "@/store/store";

type Props = {
  id: number;
  name: string;
  author: string;
  album: string;
  duration_in_seconds: number;
  setCurrentTrack: () => void;
};

const Track: FC<Props> = ({
  id,
  name,
  author,
  album,
  duration_in_seconds,
  setCurrentTrack,
}) => {
  const { isPlaying, currentTrack } = useAppSelector((state) => state.playlist);
  return (
    <div onClick={setCurrentTrack} className={s.playlistItem}>
      <div className={s.playlistTrack}>
        <div className={s.trackTitle}>
          <div className={s.trackTitleImage}>
            {currentTrack?.id === id ? (
              isPlaying ? (
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "purple",
                  }}
                ></div>
              ) : (
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "green",
                  }}
                ></div>
              )
            ) : (
              <svg className={s.trackTitleSvg}>
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </svg>
            )}
          </div>
          <div>
            <a className={s.trackTitleLink} href="http://">
              {name} <span className={s.trackTitleSpan}></span>
            </a>
          </div>
        </div>
        <div className={s.trackAuthor}>
          <a className={s.trackAuthorLink} href="http://">
            {author}
          </a>
        </div>
        <div className={s.trackAlbum}>
          <a className={s.trackAlbumLink} href="http://">
            {album}
          </a>
        </div>
        <div className="track__time">
          <svg className={s.trackTimeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className={s.trackTimeText}>
            {formatTrackTime(duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Track;
