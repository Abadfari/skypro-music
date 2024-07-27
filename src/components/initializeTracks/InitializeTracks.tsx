"use client";

import { getAllTracks } from "@/api/tracksApi";
import { setInitialTracks } from "@/store/features/playlistSlice";
import { useAppDispatch } from "@/store/store";
import { useEffect, useState } from "react";

const InitializeTracks = () => {
  const [tracks, setTracks] = useState([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    getAllTracks().then((result) => {
      setTracks(result);
      dispatch(setInitialTracks(result));
    });
  }, [dispatch]);
  return <></>;
};

export default InitializeTracks;
