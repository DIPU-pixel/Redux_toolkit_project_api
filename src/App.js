import React from "react";
import "./App.scss";
import { Route, Routes, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";

import Home from "./Components/Home/Home";
import MovieDetails from "./Components/Moviedetails/MovieDetails";
import PagenotFound from "./Components/PageNotFOund/PagenotFound";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />

          <Route path="*" element={<PagenotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
