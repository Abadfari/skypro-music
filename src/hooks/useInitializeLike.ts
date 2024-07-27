import { getFavTracks } from "@/store/features/playlistSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";

export default function useInitializeLikedTracks() {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    if (token?.access) {
      dispatch(getFavTracks(token.access));
    }
  }, [token, dispatch]);
}
