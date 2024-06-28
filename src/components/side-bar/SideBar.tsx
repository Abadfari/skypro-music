import Image from "next/image";
import s from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__icon">
          <svg>
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className={s.sidebarItem}>
            <a className={s.sidebarLink} href="#">
              <Image
                className="sidebar__img"
                src="/img/playlist01.png"
                alt="обложка плейлиста 'Плейлист дня'"
                width={250}
                height={150}
              />
            </a>
          </div>
          <div className={s.sidebarItem}>
            <a className={s.sidebarLink} href="#">
              <Image
                className="sidebar__img"
                src="/img/playlist02.png"
                alt="обложка плейлиста '100 танцевальных хитов'"
                width={250}
                height={150}
              />
            </a>
          </div>
          <div className={s.sidebarItem}>
            <a className={s.sidebarLink} href="#">
              <Image
                className="sidebar__img"
                src="/img/playlist03.png"
                alt="обложка плейлиста 'Инди заряд'"
                width={250}
                height={150}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
