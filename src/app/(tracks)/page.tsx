import Nav from "@/components/nav/Nav";
import Centerblock from "@/components/centerblock/Centerblock";
import SideBar from "@/components/side-bar/SideBar";
import Player from "@/components/player/Player";

function MainTracks() {
  return (
    <div className="container">
      <main className="main">
        <Nav />
        <Centerblock />
        <SideBar />
      </main>
      <Player />
    </div>
  );
}

export default MainTracks;
