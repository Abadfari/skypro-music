"use client";

import { getFavoriteTracks } from "@/api/tracksApi";
import { useEffect, useState } from "react";
import Centerblock from "../centerblock/Centerblock";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setUser } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";

const FavoriteContent = () => {
  const [tracks, setTracks] = useState([]);
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();
  useEffect(() => {
    if (!token) {
      dispatch(setUser(null));
      router.push("/signin");
      return;
    }
    getFavoriteTracks({ token: token?.access }).then((result) => {
      setTracks(result);
    });
  }, []);
  return <Centerblock tracks={tracks} title="Мои треки" />;
};

export default FavoriteContent;
