
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface AuthState {
    isAuth: boolean;
  user: null | string;

}
export const initialState: AuthState = {
    isAuth: false,
    user: null,
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login:(state)=> {
            state.isAuth=true
        },
        logout:(state)=> {
            state.user = null;
            state.isAuth = false;
        },
        setuser:(state, action)=> {
            return { ...state, user: action.payload };
        },
    },
});
// Action creators are generated for each case reducer function
export const { login, logout, setuser } = authSlice.actions;
/** @type {typeof authSlice.reducer} */
export const authReducer = authSlice.reducer;