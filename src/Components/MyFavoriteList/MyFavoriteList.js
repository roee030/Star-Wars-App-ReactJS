import React, { useState, useReducer, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./MyFavoriteList.css";
import Loader from "../Loader/Loader";
import MovieBox from "../MovieBox/MovieBox";
import Test from "./Test";
export default function MyFavoriteList(props) {
  const { movieList, favoriteList } = props;
  const [starMovieList, setStarMovieList] = useState(false);
  const history = useHistory();
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
