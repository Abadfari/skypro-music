"use client";

import { TrackType } from "@/types";
import Centerblock from "../centerblock/Centerblock";

const MainContent = ({ tracks }: { tracks: TrackType[] }) => {
  return (
    <>
      <Centerblock tracks={tracks} title="Треки" />
    </>
  );
};

export default MainContent;
