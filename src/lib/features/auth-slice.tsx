import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  value: AuthState;
};

type AuthState = {
  isAuth: boolean;
};

const initialState: InitialState = {
  value: {
    isAuth: false,
  },
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Login: (state) => {
      state.value.isAuth = true;
    },
    Logout: (state) => {
      state.value.isAuth = false;
    },
  },
});

export const { Login, Logout } = auth.actions;

export default auth.reducer;
