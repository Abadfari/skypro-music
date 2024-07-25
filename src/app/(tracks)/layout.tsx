import Nav from "@/components/nav/Nav";
import Player from "@/components/player/Player";
import SideBar from "@/components/side-bar/SideBar";
import s from "./layout.module.css";
import InitializeTracks from "@/components/initializeTracks/InitializeTracks";

const TrackLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={s.container}>
      <main className={s.main}>
        <Nav />
        {children}
        <SideBar />
      </main>
      <Player />
      <InitializeTracks />
    </div>
  );
};

export default TrackLayout;
