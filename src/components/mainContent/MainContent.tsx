"use client";

import { TrackType } from "@/types";
import Centerblock from "../centerblock/Centerblock";
import Nav from "../nav/Nav";
import Player from "../player/Player";
import SideBar from "../side-bar/SideBar";
import s from "./MainContent.module.css";
import { useState } from "react";

const MainContent = ({ tracks }: { tracks: TrackType[] }) => {
  const [currentTrack, setCurrentTrack] = useState<null | TrackType>(null);

  return (
    <>
      <main className={s.main}>
        <Nav />
        <Centerblock setCurrentTrack={setCurrentTrack} tracks={tracks} />
        <SideBar />
      </main>
      <Player currentTrack={currentTrack} />
    </>
  );
};

export default MainContent;
