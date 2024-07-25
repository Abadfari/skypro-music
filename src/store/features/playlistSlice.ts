import { getFavoriteTracks } from "@/api/tracksApi";
import { shuffleArray } from "@/lib/shuffleTracks";
import { TrackType } from "@/types";
import {
  createAsyncThunk,
  createSlice,
  current,
  PayloadAction,
} from "@reduxjs/toolkit";

export const getFavTracks = createAsyncThunk(
  "playlist/getFavoriteTracks",
  async (accessToken: string) => {
    const favoriteTracks = await getFavoriteTracks({ token: accessToken });
    return favoriteTracks;
  }
);

type PlaylistTrackType = {
  currentTrack: null | TrackType;
  isPlaying: boolean;
  playlist: TrackType[];
  isShuffle: boolean;
  shuffledPlaylist: TrackType[];
  likedTracks: TrackType[];
  initialTracks: TrackType[];
};

const initialState: PlaylistTrackType = {
  currentTrack: null,
  isPlaying: false,
  playlist: [],
  isShuffle: false,
  shuffledPlaylist: [],
  likedTracks: [],
  initialTracks: [],
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
        (track) => track._id === state.currentTrack?._id
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
        (track) => track._id === state.currentTrack?._id
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
    likeTrack: (state, action: PayloadAction<TrackType>) => {
      if (!state.likedTracks.includes(action.payload)) {
        state.likedTracks.push(action.payload);
      }
    },
    dislikeTrack: (state, action: PayloadAction<TrackType>) => {
      state.likedTracks = state.likedTracks.filter(
        (track) => track._id !== action.payload._id
      );
    },
    setLikedTracks: (state, action: PayloadAction<TrackType[]>) => {
      state.likedTracks = action.payload;
    },
    setInitialTracks: (state, action: PayloadAction<TrackType[]>) => {
      state.initialTracks = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getFavTracks.fulfilled, (state, action) => {
      console.log(action.payload);
      state.likedTracks = action.payload;
    });
  },
});

export const {
  setCurrentTrack,
  setIsPlaying,
  setPlaylist,
  setNextTrack,
  setPrevTrack,
  setShuffle,
  likeTrack,
  dislikeTrack,
  setLikedTracks,
  setInitialTracks,
} = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
