import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apikey } from "./../../Common/Api/MovieapiKey";
import MovieApi from "../../Common/Api/MovieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";

    const response = await MovieApi.get(
      `?apiKey=${apikey}&s=${movieText}&type=movie`
    ).catch((err) => {
      console.log(err, "err");
    });
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "friends";

    const response = await MovieApi.get(
      `?apiKey=${apikey}&s=${seriesText}&type=series`
    ).catch((err) => {
      console.log(err, "err");
    });
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("penidng");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fetched succesufully");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fetched succesufully of shows");
      return { ...state, shows: payload };
    },
  },
});
export const { addMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShow = (state) => state.movies.shows;

export default movieSlice.reducer;
