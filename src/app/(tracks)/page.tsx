import Nav from "@/components/nav/Nav";
import Centerblock from "@/components/centerblock/Centerblock";
import SideBar from "@/components/side-bar/SideBar";
import Player from "@/components/player/Player";
import s from "./page.module.css";
import { getAllTracks } from "@/api/tracksApi";

async function MainTracks() {
  const tracks = await getAllTracks();
  return (
    <div className={s.container}>
      <main className={s.main}>
        <Nav />
        <Centerblock tracks={tracks} />
        <SideBar />
      </main>
      <Player />
    </div>
  );
}


export default MainTracks;
