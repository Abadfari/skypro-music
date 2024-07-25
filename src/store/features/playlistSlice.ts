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
  filterOptions: {
    genres: string[];
    authors: string[];
    order: string;
    searchValue: string;
  };
  filteredPlaylist: TrackType[];
};

const initialState: PlaylistTrackType = {
  currentTrack: null,
  isPlaying: false,
  playlist: [],
  isShuffle: false,
  shuffledPlaylist: [],
  likedTracks: [],
  initialTracks: [],
  filterOptions: {
    genres: [],
    authors: [],
    order: "",
    searchValue: "",
  },
  filteredPlaylist: [],
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
      state.filteredPlaylist = action.payload;
    },
    setFilter: (
      state,
      action: PayloadAction<{
        genres?: string[];
        authors?: string[];
        order?: string;
        searchValue?: string;
      }>
    ) => {
      const { genres, authors, order, searchValue } = action.payload;
      state.filterOptions.authors = authors ?? state.filterOptions.authors;
      state.filterOptions.genres = genres ?? state.filterOptions.genres;
      state.filterOptions.order = order ?? state.filterOptions.order;
      state.filterOptions.searchValue =
        typeof searchValue === "string"
          ? searchValue
          : state.filterOptions.searchValue;
      let filteredPlaylist = [...state.initialTracks];
      if (state.filterOptions.genres.length) {
        filteredPlaylist = filteredPlaylist.filter((track) =>
          state.filterOptions.genres.includes(track.genre)
        );
      }
      if (state.filterOptions.authors.length) {
        filteredPlaylist = filteredPlaylist.filter((track) =>
          state.filterOptions.authors.includes(track.author)
        );
      }
      if (state.filterOptions.searchValue) {
        filteredPlaylist = filteredPlaylist.filter(
          (track) =>
            track.name
              .toLowerCase()
              .includes(state.filterOptions.searchValue.toLowerCase()) ||
            track.author
              .toLowerCase()
              .includes(state.filterOptions.searchValue.toLowerCase())
        );
      }
      switch (order) {
        case "Сначала новые":
          filteredPlaylist.sort(
            (a, b) =>
              new Date(b.release_date).getTime() -
              new Date(a.release_date).getTime()
          );
          break;
        case "Сначала старые":
          filteredPlaylist.sort(
            (a, b) =>
              new Date(a.release_date).getTime() -
              new Date(b.release_date).getTime()
          );
          break;

        default:
          break;
      }
      state.filteredPlaylist = filteredPlaylist;
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
  setFilter,
} = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
