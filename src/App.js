import React, { useState, useEffect } from "react";
import "./App.css";
import Data from "./FetchData";
import Loader from "./Components/Loader/Loader";
import MovieBox from "./Components/MovieBox/MovieBox";
function App() {
  const [movieList, setMovieList] = useState(false);

  return (
    <div className="App">
      <header className="App-header"></header>
      <Data setMovieList={setMovieList} />
      {movieList ? <MovieBox movieList={movieList} /> : <Loader />}
    </div>
  );
}

export default App;
