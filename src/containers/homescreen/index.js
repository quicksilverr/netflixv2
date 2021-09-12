import React from "react";
import { requests } from "../../Api/Requests";
import { Banner } from "../../components/banner";
import { NavBar } from "../../components/navbar";
import { Row } from "../../components/row";
import "./style.css";

export const HomeScreen = () => {
  return (
    <div className="homescreen">
      <NavBar />
      <Banner />
      <Row
       title="Netflix Originals"
       fetchUrl={requests.fetchNetflixOriginals}
       largeRowSize={true}
      />
    </div>
  );
};
