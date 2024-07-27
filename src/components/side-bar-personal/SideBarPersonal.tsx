"use client";

import { useAppDispatch, useAppSelector } from "@/store/store";
import s from "./SideBarPersonal.module.css";
import useInitializeLikedTracks from "@/hooks/useInitializeLike";
import { useRouter } from "next/navigation";
import { setUser } from "@/store/features/authSlice";

const SideBarPersonal = () => {
  const username = useAppSelector((state) => state.auth.user?.username);
  const dispatch = useAppDispatch();
  const router = useRouter();
  useInitializeLikedTracks();
  if (!username) {
    return null;
  }

  function logout() {
    dispatch(setUser(null));
    router.push("/signin");
  }
  return (
    <div className={s.sidebarPersonal}>
      <p className={s.sidebarPersonalName}>{username}</p>
      <div className={s.sidebarIcon} onClick={logout}>
        <svg>
          <use xlinkHref="img/icon/sprite.svg#logout"></use>
        </svg>
      </div>
    </div>
  );
};

export default SideBarPersonal;
