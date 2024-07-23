"use client";

import { TrackType } from "@/types";
import Centerblock from "../centerblock/Centerblock";
import Nav from "../nav/Nav";
import Player from "../player/Player";
import SideBar from "../side-bar/SideBar";
import s from "./MainContent.module.css";

const MainContent = ({ tracks }: { tracks: TrackType[] }) => {
  

  return (
    <>
      <main className={s.main}>
        <Nav />
        <Centerblock tracks={tracks} />
        <SideBar />
      </main>
      <Player />
    </>
  );
};

export default MainContent;
