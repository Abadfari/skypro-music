"use client";

import clsx from "clsx";
import s from "./Player.module.css";
import { useEffect, useRef, useState } from "react";
import { TrackType } from "@/types";

const Player = ({ currentTrack }: { currentTrack: TrackType | null }) => {
  const audioRef = useRef<null | HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function playTrack() {
    setIsPlaying(!isPlaying);
  }
  useEffect(() => {
    isPlaying ? audioRef.current?.play() : audioRef.current?.pause();
  }, [isPlaying]);
  return (
    <div className={s.bar}>
      <div className={s.barContent}>
        <audio ref={audioRef} src={currentTrack?.track_file}></audio>
        <div className={s.barPlayerProgress}></div>
        <div className={s.barPlayerBlock}>
          <div className={s.barPlayer}>
            <div className={s.playerControls}>
              <div className={s.playerBtnPrev}>
                <svg className={s.playerBtnPrevSvg}>
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </svg>
              </div>
              <div onClick={playTrack} className={clsx(s.playerBtnPlay, s.btn)}>
                <svg className={s.playerBtnPlaySvg}>
                  {!isPlaying ? (
                    <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                  ) : (
                    <use xlinkHref="img/icon/sprite.svg#icon-pause"></use>
                  )}
                </svg>
              </div>
              <div className={s.playerBtnNext}>
                <svg className={s.playerBtnNextSvg}>
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </svg>
              </div>
              <div className={clsx(s.playerBtnRepeat, s.btnIcon)}>
                <svg className={s.playerBtnRepeatSvg}>
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </svg>
              </div>
              <div className={clsx(s.playerBtnShuffle, s.btnIcon)}>
                <svg className={s.playerBtnShuffleSvg}>
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </svg>
              </div>
            </div>

            <div className={s.playerTrackPlay}>
              <div className={s.trackPlayContain}>
                <div className={s.trackPlayImage}>
                  <svg className={s.trackPlaySvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className={s.trackPlayAuthor}>
                  <a className={s.trackPlayAuthorLink} href="http://">
                    {currentTrack?.author}
                  </a>
                </div>
                <div className={s.trackPlayAlbum}>
                  <a className={s.trackPlayAlbumLink} href="http://">
                    {currentTrack?.name}
                  </a>
                </div>
              </div>

              <div className={s.trackPlayLikeDis}>
                <div className={clsx(s.trackPlayLike, s.btnIcon)}>
                  <svg className={s.trackPlayLikeSvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                </div>
                <div className={clsx(s.trackPlayDislike, s.btnIcon)}>
                  <svg className={s.trackPlayDislikeSvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={s.barVolumeBlock}>
            <div className={s.volumeContent}>
              <div className={s.volumeImage}>
                <svg className={s.volumeSvg}>
                  <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                </svg>
              </div>
              <div className={clsx(s.volumeProgress, s.btn)}>
                <input
                  className={clsx(s.volumeProgressLine, s.btn)}
                  type="range"
                  name="range"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
