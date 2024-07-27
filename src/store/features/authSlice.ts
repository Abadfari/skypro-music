import { Token, TrackType, User } from "@/types";
import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

type AuthType = {
  user: null | User;
  token: null | Token;
};

const initialState: AuthType = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<Token | null>) => {
      state.token = action.payload;
    },
  },
});

export const { setUser, setToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
