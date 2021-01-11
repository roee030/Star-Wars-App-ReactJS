import React, { useState, useEffect } from "react";
import "./MovieBox.css";

export default function MovieBox(props) {
  const getMovieImg = (id) => {
    return <img src={process.env.PUBLIC_URL + `${id}.jpg`}></img>;
  };
  const movies = props.movieList.results.map((e) => {
    return (
      <div key={e.episode_id} className="movieBox">
        <div className="movie_img">{getMovieImg(e.episode_id)}</div>
        <div className="text_title">{e.title}</div>
        <div className="text_release_date">{e.release_date}</div>
      </div>
    );
  });
  return <div className="moviesWraper">{movies}</div>;
}
