"use client"
import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./features/auth-slice"
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import Root from 'postcss/lib/root'
export const makeStore = () => {
  return configureStore({
    reducer: {
        authReducer
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;