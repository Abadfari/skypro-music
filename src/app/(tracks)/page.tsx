import Nav from "@/components/nav/Nav";
import Centerblock from "@/components/centerblock/Centerblock";
import SideBar from "@/components/side-bar/SideBar";
import Player from "@/components/player/Player";
import s from "./page.module.css";

function MainTracks() {
  return (
    <div className={s.container}>
      <main className={s.main}>
        <Nav />
        <Centerblock />
        <SideBar />
      </main>
      <Player />
    </div>
  );
}

// TODO: подключить треки из api

// TODO: создать файлик error.tsx

export default MainTracks;
