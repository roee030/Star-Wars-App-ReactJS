import React, { useState, useEffect } from "react";
import axios from "axios";
const FetchData = (props) => {
  const pullDataFromApi = async () => {
    let dataFromApi = await axios.get("https://swapi.dev/api/films");
    if (dataFromApi.status == 200) {
      props.setMovieList(dataFromApi.data);
    } else {
    }
  };
  useEffect(() => {
    pullDataFromApi();
  }, []);
  return <div></div>;
};
export default FetchData;
