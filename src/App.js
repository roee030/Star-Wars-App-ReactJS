import React, { useState, useEffect } from "react";
import "./App.css";
import Data from "./FetchData";
import Loader from "./Components/Loader/Loader";
import MovieBox from "./Components/MovieBox/MovieBox";
import Header from "./Components/Header/Header";
function App() {
  const [movieList, setMovieList] = useState(false);
  const [favoriteList, setFavoriteList] = useState(false);
  useEffect(() => {
    let myFavoriteMovies = {};
    if (!localStorage.getItem("favorites")) {
      localStorage.setItem("favorites", JSON.stringify(myFavoriteMovies));
    }
  }, []);
  return (
    <div className="App">
      <Header />
      <Data setMovieList={setMovieList} />
      {movieList ? (
        <MovieBox movieList={movieList} setFavoriteList={setFavoriteList} />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
