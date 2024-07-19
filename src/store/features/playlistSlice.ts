import { shuffleArray } from "@/lib/shuffleTracks";
import { TrackType } from "@/types";
import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

type PlaylistTrackType = {
  currentTrack: null | TrackType;
  isPlaying: boolean;
  playlist: TrackType[];
  isShuffle: boolean;
  shuffledPlaylist: TrackType[];
};

const initialState: PlaylistTrackType = {
  currentTrack: null,
  isPlaying: false,
  playlist: [],
  isShuffle: false,
  shuffledPlaylist: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<TrackType>) => {
      state.currentTrack = action.payload;
      state.isPlaying = true;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setPlaylist: (state, action: PayloadAction<TrackType[]>) => {
      state.playlist = action.payload;
    },
    setNextTrack: (state) => {
      const playlist = state.isShuffle
        ? state.shuffledPlaylist
        : state.playlist;
      const currentId = playlist.findIndex(
        (track) => track.id === state.currentTrack?.id
      );
      const nextTrack = playlist[currentId + 1];
      if (nextTrack) {
        state.currentTrack = nextTrack;
        state.isPlaying = true;
      }
    },

    setPrevTrack: (state) => {
      const playlist = state.isShuffle
        ? state.shuffledPlaylist
        : state.playlist;
      const currentId = playlist.findIndex(
        (track) => track.id === state.currentTrack?.id
      );
      const prevTrack = playlist[currentId - 1];
      if (prevTrack) {
        state.currentTrack = prevTrack;
      }
    },
    setShuffle: (state, action: PayloadAction<boolean>) => {
      state.isShuffle = action.payload;
      if (action.payload) {
        state.shuffledPlaylist = shuffleArray([...state.playlist]);
      }
    },
  },
});

export const {
  setCurrentTrack,
  setIsPlaying,
  setPlaylist,
  setNextTrack,
  setPrevTrack,
  setShuffle,
} = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
