"use client";

import { getCategoryTracks } from "@/api/tracksApi";
import { useEffect, useState } from "react";
import Centerblock from "../centerblock/Centerblock";
import { useAppSelector } from "@/store/store";

const CategoryContent = ({ id }: { id: string }) => {
  const [tracks, setTracks] = useState([]);
  const initialTracks = useAppSelector((state) => state.playlist.initialTracks);

  useEffect(() => {
    if (initialTracks.length) {
      getCategoryTracks({ id }).then((result) => {
        let finalTracks = result.items.map((id) => {
          console.log();
          return initialTracks.find((t) => t._id === id);
        });
        console.log(finalTracks);
        setTracks({ items: finalTracks, name: result.name });
      });
    }
  }, [initialTracks]);
  return <Centerblock tracks={tracks.items} title={tracks.name} />;
};

export default CategoryContent;
