"use client";
import { useCallback, useState } from "react";
import Burger from "../burger/Burger";
import s from "./NavMenu.module.css";
import Link from "next/link";

const NavMenu = () => {
  const [visible, setVisible] = useState(false);

  const handleMenu = useCallback(() => {
    setVisible((prev) => !prev);
  }, []);
  return (
    <>
      <Burger handleMenu={handleMenu} />
      {visible && (
        <div className={s.navMenu}>
          <ul className={s.menuList}>
            <li className={s.menuItem}>
              <Link href="/" className={s.menuLink}>
                Главное
              </Link>
            </li>
            <li className={s.menuItem}>
              <Link href="/favorite" className={s.menuLink}>
                Мой плейлист
              </Link>
            </li>
            <li className={s.menuItem}>
              <Link href="/signin" className={s.menuLink}>
                Войти
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavMenu;
