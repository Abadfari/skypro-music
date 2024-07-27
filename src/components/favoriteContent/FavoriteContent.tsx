"use client";

import { useEffect, useState } from "react";
import Centerblock from "../centerblock/Centerblock";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setUser } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";

const FavoriteContent = () => {
  // const [tracks, setTracks] = useState([]);
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const likedTracks = useAppSelector((state) => state.playlist.likedTracks);
  useEffect(() => {
    if (!token) {
      dispatch(setUser(null));
      router.push("/signin");
      return;
    }
  }, []);
  return <Centerblock tracks={likedTracks} title="Мои треки" />;
};

export default FavoriteContent;
