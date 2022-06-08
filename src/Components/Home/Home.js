import React, { useEffect } from "react";
import Movielisting from "./../MovieListing/Movielisting";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../Features/Movies/movislice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(fetchAsyncMovies());
     dispatch(fetchAsyncShows())

  }, [dispatch]);
  return (
    <>
      <div>
        <div className="banner-img"></div>
        <Movielisting />
      </div>
    </>
  );
};

export default Home;
