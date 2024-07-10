import MainContent from "@/components/mainContent/MainContent";
import s from "./page.module.css";
import { getAllTracks } from "@/api/tracksApi";

async function MainTracks() {
  const tracks = await getAllTracks();

  return (
    <div className={s.container}>
      <MainContent tracks={tracks} />
    </div>
  );
}

export default MainTracks;
