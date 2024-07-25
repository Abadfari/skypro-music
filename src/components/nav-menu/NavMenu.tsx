"use client";
import { useCallback, useState } from "react";
import Burger from "../burger/Burger";
import s from "./NavMenu.module.css";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import { setUser } from "@/store/features/authSlice";

const NavMenu = () => {
  const [visible, setVisible] = useState(false);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleMenu = useCallback(() => {
    setVisible((prev) => !prev);
  }, []);

  function logout() {
    dispatch(setUser(null));
    router.push("/signin");
  }
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
              {user ? (
                <button className={s.buttonLogout} onClick={logout}>
                  Выйти
                </button>
              ) : (
                <Link href="/signin" className={s.menuLink}>
                  Войти
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavMenu;
