import React from "react";
import { useHistory } from "react-router-dom";
import "./MyFavoriteList.css";
export default function MovieBox(props) {
  const history = useHistory();
  //get the img from the public folder
  const getMovieImg = (id) => {
    return (
      <img
        alt=""
        onClick={() => history.push(`/${id}`)}
        src={process.env.PUBLIC_URL + `${id}.jpg`}
      ></img>
    );
  };
  //add the movie from the favorite list
  const addFromFavorite = (id) => {
    let localFavoriteData = localStorage.getItem("favorites");
    let temp = JSON.parse(localFavoriteData);
    temp[id] = true;
    localStorage.setItem("favorites", JSON.stringify(temp));
    props.setStarMovieList(temp);
  };
  //delete the movie from the favorite list
  const removeFromFavorite = (id) => {
    let localFavoriteData = localStorage.getItem("favorites");
    let temp = JSON.parse(localFavoriteData);
    temp[id] = false;
    localStorage.setItem("favorites", JSON.stringify(temp));
    props.setFavoriteList(temp);
    // window.location.reload();
  };
  //display full star if the movie is in the favorite or
  //display empty star if the movie is not.
  const favorite = (id) => {
    const localFavoriteData = JSON.parse(localStorage.getItem("favorites"));

    if (localFavoriteData[id] == true) {
      return (
        <img
          alt=""
          className="favorite"
          onClick={() => removeFromFavorite(id)}
          src={process.env.PUBLIC_URL + `fullstar.png`}
        ></img>
      );
    } else {
      return (
        <img
          alt=""
          className="non__favorite"
          onClick={() => addFromFavorite(id)}
          src={process.env.PUBLIC_URL + `Empty_star.png`}
        ></img>
      );
    }
  };
  const movies = props.movieList.results.map((e) => {
    let x = e.episode_id;
    console.log(x);
    console.log(props.favoriteList);
    if (
      props.favoriteList.hasOwnProperty(e.episode_id) &&
      props.favoriteList[x]
    ) {
      return (
        <div key={e.episode_id} className="movieBox">
          <div className="movie_img">{getMovieImg(e.episode_id)}</div>
          <div className="text_title">{e.title}</div>
          <div className="text_release_date">{e.release_date}</div>
          {favorite(e.episode_id)}
        </div>
      );
    }
  });

  return <div className="moviesWraper">{movies}</div>;
}
