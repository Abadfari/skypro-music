import clsx from "clsx";
import s from "./VolumeProgress.module.css";
import React, { useState } from "react";

type Props = { audio: React.RefObject<HTMLAudioElement | null> };

const VolumeProgress = ({ audio }: Props) => {
  const [volume, setVolume] = useState(0.2);

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (audio.current) {
      setVolume(+event.target.value);
      audio.current.volume = +event.target.value;
    }
  }

  return (
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
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default VolumeProgress;
