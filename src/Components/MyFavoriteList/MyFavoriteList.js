import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./MyFavoriteList.css";
import Loader from "../Loader/Loader";
import Test from "./Test";
export default function MyFavoriteList(props) {
  const { movieList, favoriteList, setFavoriteList } = props;
  const [starMovieList, setStarMovieList] = useState(false);

  const emptyList = () => {
    let flag = true;
    console.log("starMovieList", starMovieList);
    if (starMovieList) {
      for (let key in starMovieList) {
        if (starMovieList[key] == true) {
          console.log(starMovieList[key], key);
          return false;
        }
      }
      if (flag) {
        return <div className="empty_list_msg">No Favorite Movies!</div>;
      }
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
      {props.movieList ? "" : <Loader />}
      {emptyList()}
    </div>
  );
}
