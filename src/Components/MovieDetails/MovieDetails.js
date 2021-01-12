import React from "react";
import "./MovieDetails.css";
import { useHistory, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
export default function MovieDetails(props) {
  const history = useHistory();
  let { id } = useParams();

  const getMovieDetails = (id) => {
    const movieDetail = props.movieList.results.filter(
      (e) => id == e.episode_id
    );

    return (
      <div>
        {movieDetail[0] ? (
          <>
            <div>{getMovieImg(id)}</div>
            <div className="movie_details_info">
              <div>Title: {movieDetail[0].title}</div>
              <div>Producer: {movieDetail[0].producer}</div>
              <div>Release date: {movieDetail[0].release_date}</div>
              <div>Opening crawl: {movieDetail[0].opening_crawl}</div>
              <i className="back_home" onClick={() => history.push("/")}>
                Back &#8592;
              </i>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    );
  };
  //get the img from the public folder
  const getMovieImg = (id) => {
    return (
      <img
        alt=""
        className="movie_details_img"
        src={process.env.PUBLIC_URL + `${id}.jpg`}
      ></img>
    );
  };
  return (
    <div className="movie_detail_wraper">
      {props.movieList ? getMovieDetails(id) : <Loader />}
    </div>
  );
}
