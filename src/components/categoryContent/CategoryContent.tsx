"use client";

import { getCategoryTracks } from "@/api/tracksApi";
import { useEffect, useState } from "react";
import Centerblock from "../centerblock/Centerblock";
import { useAppSelector } from "@/store/store";
import { TrackType } from "@/types";

const CategoryContent = ({ id }: { id: string }) => {
  const [tracks, setTracks] = useState<{
    items: TrackType[];
    name: string;
  }>({
    items: [],
    name: "",
  });
  const initialTracks = useAppSelector((state) => state.playlist.initialTracks);

  useEffect(() => {
    if (initialTracks.length) {
      getCategoryTracks({ id }).then(
        (result: { items: number[]; name: string }) => {
          let finalTracks = result.items.map((id) => {
            return initialTracks.find((t) => t._id === id);
          });
          setTracks({ items: finalTracks, name: result.name });
        }
      );
    }
  }, [initialTracks]);

  return <Centerblock tracks={tracks.items} title={tracks.name} />;
};

export default CategoryContent;
