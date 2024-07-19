"use client";

import { getCategoryTracks } from "@/api/tracksApi";
import { useEffect, useState } from "react";
import Centerblock from "../centerblock/Centerblock";

const CategoryContent = ({ id }: { id: string }) => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getCategoryTracks({ id }).then((result) => {
      console.log(result);
      setTracks(result);
    });
  }, []);
  return <Centerblock tracks={tracks.items} title={tracks.name} />;
};

export default CategoryContent;
