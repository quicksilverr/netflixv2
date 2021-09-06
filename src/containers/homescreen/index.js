import React from "react";
import { Banner } from "../../components/banner";
import { NavBar } from "../../components/navbar";
import "./style.css";

export const HomeScreen = () => {
  return (
    <div className="homescreen">
      <NavBar />
      <Banner />
      {/* Row */}
    </div>
  );
};
