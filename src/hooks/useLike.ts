import { dislikeTrack, likeTrack } from "@/api/tracksApi";
import {
  likeTrack as likeTrackAction,
  dislikeTrack as dislikeTrackAction,
} from "@/store/features/playlistSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { TrackType } from "@/types";

export const useLikeTrack = (track: TrackType) => {
  const dispatch = useAppDispatch();

  const token = useAppSelector((state) => state.auth.token);
  const user = useAppSelector((state) => state.auth.user);
  const likedTracks = useAppSelector((state) => state.playlist.likedTracks);

  const isLiked = likedTracks.find((t) => track._id === t._id);

  const handleLike = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();

    if (!token?.access || !token?.refresh || !user) {
      return alert("Авторизуйтесь, чтобы добавить трек в избранное");
    }

    const action = isLiked ? dislikeTrack : likeTrack;

    try {
      await action({
        trackId: track._id,
        access: token.access,
        refresh: token.refresh,
      });
      if (isLiked) {
        dispatch(dislikeTrackAction(track));
      } else {
        dispatch(likeTrackAction(track));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { isLiked, handleLike };
};
