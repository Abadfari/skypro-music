"use client";
import { useCallback, useState } from "react";
import Burger from "../burger/Burger";
import s from "./NavMenu.module.css";

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
              <a href="#" className={s.menuLink}>
                Главное
              </a>
            </li>
            <li className={s.menuItem}>
              <a href="#" className={s.menuLink}>
                Мой плейлист
              </a>
            </li>
            <li className={s.menuItem}>
              <a href="../signin.html" className={s.menuLink}>
                Войти
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavMenu;
