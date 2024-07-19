import MainContent from "@/components/mainContent/MainContent";
import { getAllTracks } from "@/api/tracksApi";

async function MainTracks() {
  const tracks = await getAllTracks();

  return <MainContent tracks={tracks} />;
}

export default MainTracks;
