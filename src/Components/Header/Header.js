import React from "react";
import "./Header.css";
export default function Header(props) {
  const { favoriteList } = props;
  console.log(favoriteList);
  let counter = 0;
  const getNumberOfFavoriteMovies = () => {
    if (favoriteList) {
      Object.keys(favoriteList).forEach((key) => {
        if (favoriteList[key] == true) {
          counter++;
          console.log(counter);
        }
      });
      return <span> ( {counter} )</span>;
    }
  };
  return (
    <div className="header">
      <img
        className="header__img"
        src={process.env.PUBLIC_URL + `star-wars-logo.png`}
      ></img>
      <div className="header__favorite">
        My Favorites Movies {getNumberOfFavoriteMovies()}
        <img
          className="header__img"
          src={process.env.PUBLIC_URL + `fullstar.png`}
        ></img>
      </div>
    </div>
  );
}
