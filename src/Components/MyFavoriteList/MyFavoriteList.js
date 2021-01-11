import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./MyFavoriteList.css";
import Loader from "../Loader/Loader";
import Test from "./Test";
export default function MyFavoriteList(props) {
  const { movieList, favoriteList } = props;
  const [, setStarMovieList] = useState(false);
  useEffect(() => {
    setStarMovieList(JSON.parse(localStorage.getItem("favorites")));
  }, []);
  return (
    <div className="favorite_list">
      {props.movieList ? (
        <Test
          movieList={movieList}
          favoriteList={favoriteList}
          setStarMovieList={setStarMovieList}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
}
