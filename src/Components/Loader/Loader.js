import React from "react";
import "./Loader.css";
export default function Loader() {
  return (
    <div className="starwars-demo">
      <img
        src="//cssanimation.rocks/demo/starwars/images/star.svg"
        alt="Star"
        className="star"
      />
      <img
        src="//cssanimation.rocks/demo/starwars/images/wars.svg"
        alt="Wars"
        className="wars"
      />
    </div>
  );
}
