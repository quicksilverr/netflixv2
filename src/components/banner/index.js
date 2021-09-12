import axios from "../../Api/axios";
import {requests} from "../../Api/Requests"
import React, { useEffect, useState } from "react";
import "./style.css";

const Classnames = {
  Banner: "banner",
  Banner_Contents: "banner__contents",
  Banner_Title: "banner__title",
  Banner_Buttons: "banner__buttons",
  Banner_Button: "banner__button",
  Banner_Description: "banner__description",
  Banner_FadeBottom: "banner--fadeBottom",
};

export const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
    }
    fetchData()
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header
      className={Classnames.Banner}
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className={Classnames.Banner_Contents}>
        <h1 className={Classnames.Banner_Title}>{movie?.name || movie?.title || movie?.original_name}</h1>
        <div className={Classnames.Banner_Buttons}>
          <button className={Classnames.Banner_Button}>Play</button>
          <button className={Classnames.Banner_Button}>My List</button>
        </div>
        <h1 className={Classnames.Banner_Description}>
          {truncate( movie?.overview, 150)}
        </h1>
      </div>
      <div className={Classnames.Banner_FadeBottom} />
    </header>
  );
};
