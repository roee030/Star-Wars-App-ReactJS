import React, { useState, useEffect } from "react";
import "./App.css";
import Data from "./FetchData";
import Loader from "./Components/Loader/Loader";
import MovieBox from "./Components/MovieBox/MovieBox";
import Header from "./Components/Header/Header";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import MyFavoriteList from "./Components/MyFavoriteList/MyFavoriteList";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
function App() {
  const [movieList, setMovieList] = useState(false);
  const [favoriteList, setFavoriteList] = useState(false);

  useEffect(() => {
    let myFavoriteMovies = {};
    if (!localStorage.getItem("favorites")) {
      localStorage.setItem("favorites", JSON.stringify(myFavoriteMovies));
    } else {
      setFavoriteList(JSON.parse(localStorage.getItem("favorites")));
    }
  }, []);
  return (
    <div className="App">
      <Data setMovieList={setMovieList} />
      <Router>
        <Header favoriteList={favoriteList} />
        <Route exact path="/">
          {movieList ? (
            <MovieBox movieList={movieList} setFavoriteList={setFavoriteList} />
          ) : (
            <Loader />
          )}
        </Route>
        <Route path="/:id">
          <MovieDetails movieList={movieList}></MovieDetails>
        </Route>
        <Route path="/MyFavoriteList">
          <MyFavoriteList
            movieList={movieList}
            favoriteList={favoriteList}
          ></MyFavoriteList>
        </Route>
      </Router>
    </div>
  );
}

export default App;
