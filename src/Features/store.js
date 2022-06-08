import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./Movies/movislice"

export const store = configureStore({
    reducer:{
        movies:movieReducer
    },
})