import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <img
        className="header__img"
        src={process.env.PUBLIC_URL + `star-wars-logo.png`}
      ></img>
      <div className="header__favorite">
        My Favorites Movies
        <img
          className="header__img"
          src={process.env.PUBLIC_URL + `fullstar.png`}
        ></img>
      </div>
    </div>
  );
}
