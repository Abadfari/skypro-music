"use client";

import clsx from "clsx";
import s from "./PlayerLikeBlock.module.css";
import { useLikeTrack } from "@/hooks/useLike";
import { TrackType } from "@/types";

const PlayerLikeBlock = ({ track }: { track: TrackType }) => {
  const { isLiked, handleLike } = useLikeTrack(track);
  return (
    <div className={s.trackPlayLikeDis} onClick={handleLike}>
      {isLiked ? (
        <svg className={s.trackPlayLikeSvg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
        </svg>
      ) : (
        <svg className={s.trackPlayDislikeSvg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-dislike"></use>
        </svg>
      )}
      {/* <div className={clsx(s.trackPlayLike, s.btnIcon)}></div> */}
    </div>
  );
};

export default PlayerLikeBlock;
