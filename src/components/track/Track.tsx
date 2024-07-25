// TODO: сделать сдили для иконок текущщего трека

import { FC } from "react";
import s from "./Track.module.css";
import { formatTrackTime } from "@/lib/formatTrackTime";
import { useAppSelector } from "@/store/store";
import { useLikeTrack } from "@/hooks/useLike";
import { TrackType } from "@/types";

type Props = {
  _id: number;
  name: string;
  author: string;
  album: string;
  duration_in_seconds: number;
  setCurrentTrack: () => void;
  track: TrackType;
};

const Track: FC<Props> = ({
  _id,
  name,
  author,
  album,
  duration_in_seconds,
  setCurrentTrack,
  track,
}) => {
  const { isPlaying, currentTrack } = useAppSelector((state) => state.playlist);
  const { isLiked, handleLike } = useLikeTrack(track);
  return (
    <div onClick={setCurrentTrack} className={s.playlistItem}>
      <div className={s.playlistTrack}>
        <div className={s.trackTitle}>
          <div className={s.trackTitleImage}>
            {currentTrack?._id === _id ? (
              isPlaying ? (
                <div className={s.playingDot}></div>
              ) : (
                <div className={s.pauseDot}></div>
              )
            ) : (
              <svg className={s.trackTitleSvg}>
                <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
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
        <div className={s.trackTime}>
          <div onClick={handleLike}>
            {isLiked ? (
              <svg className={s.trackTimeSvg}>
                <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
              </svg>
            ) : (
              <svg className={s.trackTimeSvg}>
                <use xlinkHref="/img/icon/sprite.svg#icon-dislike"></use>
              </svg>
            )}
          </div>
          <span className={s.trackTimeText}>
            {formatTrackTime(duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Track;
