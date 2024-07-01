import s from "./Track.module.css";

const Track = () => {
  return (
    <div className={s.playlistItem}>
      <div className={s.playlistTrack}>
        <div className={s.trackTitle}>
          <div className={s.trackTitleImage}>
            <svg className={s.trackTitleSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <div>
            <a className={s.trackTitleLink} href="http://">
              Guilt <span className={s.trackTitleSpan}></span>
            </a>
          </div>
        </div>
        <div className={s.trackAuthor}>
          <a className={s.trackAuthorLink} href="http://">
            Nero
          </a>
        </div>
        <div className={s.trackAlbum}>
          <a className={s.trackAlbumLink} href="http://">
            Welcome Reality
          </a>
        </div>
        <div className="track__time">
          <svg className={s.trackTimeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className={s.trackTimeText}>4:44</span>
        </div>
      </div>
    </div>
  );
};

export default Track;
