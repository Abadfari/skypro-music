"use client";
import { useCallback, useState } from "react";
import Burger from "../burger/Burger";

const NavMenu = () => {
  const [visible, setVisible] = useState(false);

  const handleMenu = useCallback(() => {
    setVisible((prev) => !prev);
  }, []);
  return (
    <>
      <Burger handleMenu={handleMenu} />
      {visible && (
        <div className="nav__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="#" className="menu__link">
                Главное
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Мой плейлист
              </a>
            </li>
            <li className="menu__item">
              <a href="../signin.html" className="menu__link">
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
