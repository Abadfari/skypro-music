"use client";

import { TrackType } from "@/types";
import Centerblock from "../centerblock/Centerblock";
import { useAppSelector } from "@/store/store";

const MainContent = ({ tracks }: { tracks: TrackType[] }) => {
  const filterTracks = useAppSelector(
    (state) => state.playlist.filteredPlaylist
  );
  return (
    <>
      <Centerblock tracks={filterTracks} title="Треки" />
    </>
  );
};

export default MainContent;
