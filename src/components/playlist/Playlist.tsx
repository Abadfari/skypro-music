import Track from "../track/Track";

const Playlist = () => {
  return (
    <div className="content__playlist playlist">
      {Array(20)
        .fill({})
        .map((_, index) => (
          <Track key={index} />
        ))}
    </div>
  );
};

export default Playlist;
