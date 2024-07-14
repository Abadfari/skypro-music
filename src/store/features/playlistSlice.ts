import { TrackType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PlaylistTrackType = {
  currentTrack: null | TrackType;
};

const initialState: PlaylistTrackType = {
  currentTrack: null,
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<TrackType>) => {
      state.currentTrack = action.payload;
    },
  },
});

export const { setCurrentTrack } = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;