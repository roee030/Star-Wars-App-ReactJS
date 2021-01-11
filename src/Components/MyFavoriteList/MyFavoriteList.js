import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./MyFavoriteList.css";
import Loader from "../Loader/Loader";
import Test from "./Test";
export default function MyFavoriteList(props) {
  const { movieList, favoriteList, setFavoriteList } = props;
  const [starMovieList, setStarMovieList] = useState(false);
  const saveNewFavoriteMovies = (arr) => {
    localStorage.setItem("favorite", JSON.stringifyt(arr));
    setStarMovieList(arr);
  };
  const aa = () => {
    console.log(starMovieList);
    if (!starMovieList) {
    }
  };
  useEffect(() => {
    setStarMovieList(JSON.parse(localStorage.getItem("favorites")));
  }, []);
  return (
    <div className="favorite_list">
      <Test
        movieList={movieList}
        favoriteList={favoriteList}
        setStarMovieList={setStarMovieList}
        setFavoriteList={setFavoriteList}
      />
      {props.movieList ? aa() : <Loader />}
    </div>
  );
}
