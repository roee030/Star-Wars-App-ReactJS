import React, { useState, useEffect } from "react";
import "./MovieBox.css";

export default function MovieBox(props) {
  const getMovieImg = (id) => {
    return <img src={process.env.PUBLIC_URL + `${id}.jpg`}></img>;
  };
  const addFromFavorite = (id) => {
    let localFavoriteData = localStorage.getItem("favorites");
    let temp = JSON.parse(localFavoriteData);
    temp[id] = true;
    localStorage.setItem("favorites", JSON.stringify(temp));
    props.setFavoriteList(temp);
  };
  const removeFromFavorite = (id) => {
    let localFavoriteData = localStorage.getItem("favorites");
    let temp = JSON.parse(localFavoriteData);
    temp[id] = false;
    localStorage.setItem("favorites", JSON.stringify(temp));
    props.setFavoriteList(temp);
  };
  const favorite = (id) => {
    const localFavoriteData = JSON.parse(localStorage.getItem("favorites"));

    if (localFavoriteData[id] == true) {
      return (
        <img
          className="favorite"
          onClick={() => removeFromFavorite(id)}
          src={process.env.PUBLIC_URL + `fullstar.png`}
        ></img>
      );
    } else {
      return (
        <img
          className="non__favorite"
          onClick={() => addFromFavorite(id)}
          src={process.env.PUBLIC_URL + `Empty_star.png`}
        ></img>
      );
    }
  };
  const movies = props.movieList.results.map((e) => {
    return (
      <div key={e.episode_id} className="movieBox">
        <div className="movie_img">{getMovieImg(e.episode_id)}</div>
        <div className="text_title">{e.title}</div>
        <div className="text_release_date">{e.release_date}</div>
        {favorite(e.episode_id)}
      </div>
    );
  });
  return <div className="moviesWraper">{movies}</div>;
}
