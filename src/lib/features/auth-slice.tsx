"use client"
import {createSlice,PayloadAction} from "@reduxjs/toolkit"
 


type InitialState={
    value:AuthState;
}
type AuthState={
    isAuth:boolean
}
const initialState={
value:{
    isAuth:false,
} as AuthState,
} as  InitialState;

export const auth =createSlice({
    name:"auth",
    initialState,
    reducers:{
        Login:() => {
            return {
                value:{
                    isAuth:true
                }
            }
        }, 
        Logout: () => {
           return initialState
        },
    }
});
export const {Login,Logout} =auth.actions;
export default auth.reducer;