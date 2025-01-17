"use client";

import clsx from "clsx";
import s from "./Player.module.css";
import React, { useCallback, useEffect, useRef, useState } from "react";
import PlayerProgressBar from "../playerProgressBar/PlayerProgressBar";
import { formatTrackTime } from "@/lib/formatTrackTime";
import VolumeProgress from "../volumeProgress/VolumeProgress";
import { useAppDispatch, useAppSelector } from "@/store/store";
import {
  setIsPlaying,
  setNextTrack,
  setPrevTrack,
  setShuffle,
} from "@/store/features/playlistSlice";
import PlayerLikeBlock from "../playerLikeBlock/PlayerLikeBlock";

const Player = () => {
  const audioRef = useRef<null | HTMLAudioElement>(null);
  const [isLoop, setIsLoop] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
  const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
  const isShuffle = useAppSelector((state) => state.playlist.isShuffle);
  const dispatch = useAppDispatch();

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (audioRef.current) {
      audioRef.current.currentTime = +event.target.value;
    }
  }

  function toggleLoop() {
    if (audioRef.current) {
      setIsLoop(!isLoop);
      audioRef.current.loop = !audioRef.current.loop;
    }
  }

  function playTrack() {
    dispatch(setIsPlaying(!isPlaying));
  }

  const handleNextTrack = useCallback(() => {
    dispatch(setNextTrack());
  }, [dispatch]);

  function handlePrevTrack() {
    dispatch(setPrevTrack());
  }

  function handleShuffleTrack() {
    dispatch(setShuffle(!isShuffle));
  }

  const handleClick = () => {
    alert("Еще не реализовано");
  };

  useEffect(() => {
    const ref = audioRef.current;
    function handleTimeUpdate() {
      if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
    }
    if (currentTrack) {
      ref?.addEventListener("timeupdate", handleTimeUpdate);
      ref?.addEventListener("ended", handleNextTrack);
    }
    return () => {
      ref?.removeEventListener("timeupdate", handleTimeUpdate);
      ref?.removeEventListener("ended", handleNextTrack);
    };
  }, [currentTrack, handleNextTrack]);

  useEffect(() => {
    isPlaying ? audioRef.current?.play() : audioRef.current?.pause();
  }, [isPlaying, currentTrack]);

  if (!currentTrack) {
    return null;
  }
  return (
    <div className={s.bar}>
      <div className={s.barContent}>
        <audio ref={audioRef} src={currentTrack?.track_file}></audio>
        <div className={s.currentTime}>
          {formatTrackTime(Math.floor(currentTime))}/
          {formatTrackTime(Math.floor(audioRef.current?.duration || 0))}
        </div>
        <PlayerProgressBar
          max={audioRef.current?.duration || 0}
          value={currentTime}
          onChange={onChange}
          step={0.01}
        />
        <div className={s.barPlayerBlock}>
          <div className={s.barPlayer}>
            <div className={s.playerControls}>
              <div className={s.playerBtnPrev} onClick={handlePrevTrack}>
                <svg className={s.playerBtnPrevSvg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
                </svg>
              </div>
              <div onClick={playTrack} className={clsx(s.playerBtnPlay, s.btn)}>
                <svg className={s.playerBtnPlaySvg}>
                  {!isPlaying ? (
                    <use xlinkHref="/img/icon/sprite.svg#icon-play"></use>
                  ) : (
                    <use xlinkHref="/img/icon/sprite.svg#icon-pause"></use>
                  )}
                </svg>
              </div>
              <div className={s.playerBtnNext} onClick={handleNextTrack}>
                <svg className={s.playerBtnNextSvg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                </svg>
              </div>
              <div
                onClick={toggleLoop}
                className={clsx(s.playerBtnRepeat, s.btnIcon)}
              >
                <svg className={s.playerBtnRepeatSvg}>
                  {!isLoop ? (
                    <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
                  ) : (
                    <use xlinkHref="/img/icon/sprite.svg#icon-repeat-active"></use>
                  )}
                </svg>
              </div>
              <div
                className={clsx(s.playerBtnShuffle, s.btnIcon)}
                onClick={handleShuffleTrack}
              >
                <svg className={s.playerBtnShuffleSvg}>
                  {!isLoop ? (
                    <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
                  ) : (
                    <use xlinkHref="/img/icon/sprite.svg#icon-shuffle-active"></use>
                  )}
                </svg>
              </div>
            </div>

            <div className={s.playerTrackPlay}>
              <div className={s.trackPlayContain}>
                <div className={s.trackPlayImage}>
                  <svg className={s.trackPlaySvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
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

              <PlayerLikeBlock track={currentTrack} />
            </div>
          </div>
          <VolumeProgress audio={audioRef} />
        </div>
      </div>
    </div>
  );
};

export default Player;
