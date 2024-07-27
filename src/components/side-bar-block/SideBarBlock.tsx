import Image from "next/image";
import Link from "next/link";
import s from "./SideBarBlock.module.css";

const SideBarBlock = () => {
  return (
    <div className={s.sidebarBlock}>
      <div className={s.sidebarList}>
        <div className={s.sidebarItem}>
          <Link className={s.sidebarLink} href="/category/2">
            <Image
              className={s.sidebarImg}
              src="/img/playlist01.png"
              alt="обложка плейлиста 'Плейлист дня'"
              width={250}
              height={150}
            />
          </Link>
        </div>
        <div className={s.sidebarItem}>
          <Link className={s.sidebarLink} href="/category/3">
            <Image
              className={s.sidebarImg}
              src="/img/playlist02.png"
              alt="обложка плейлиста '100 танцевальных хитов'"
              width={250}
              height={150}
            />
          </Link>
        </div>
        <div className={s.sidebarItem}>
          <Link className={s.sidebarLink} href="/category/4">
            <Image
              className={s.sidebarImg}
              src="/img/playlist03.png"
              alt="обложка плейлиста 'Инди заряд'"
              width={250}
              height={150}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBarBlock;
