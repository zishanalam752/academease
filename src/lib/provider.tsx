"use client"
import { Provider } from "react-redux";
import { makeStore, AppStore } from "./store"; // Import your makeStore function and types
import React from "react";

const store = makeStore(); // Create the Redux store

export function ReduxProvider ({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>{children}</Provider>
    );
}
