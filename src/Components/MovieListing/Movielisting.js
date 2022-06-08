import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../Features/Movies/movislice";
import Moviecard from "../Moviecard/Moviecard";
import "./MovieListing.scss";
import { getAllShow } from "./../../Features/Movies/movislice";

const Movielisting = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShow);
  let renderMovie,
    renderShows = "";
  renderMovie =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <Moviecard key={index} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => {
        return <Moviecard key={index} data={movie} />;
      })
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );
  console.log(renderMovie, "this render");
  console.log(renderShows, "this is show");
  return (
    <>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container">{renderMovie}</div>
        </div>
        <div className="show-list">
          <h2>Shows</h2>
          <div className="movie-container">{renderShows}</div>
        </div>
      </div>
    </>
  );
};

export default Movielisting;
