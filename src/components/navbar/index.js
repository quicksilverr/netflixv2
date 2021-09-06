import React, { useEffect, useState } from "react";
import { Svgs } from "../../assets/index";
import "./style.css";

const Classnames = {
  Nav: "nav",
  Nav_Black: "nav_navbar_background",
  Nav_Logo: "nav__logo",
  Nav_Avatar: "nav__avatar",
  Nav_Contents: "nav__contents",
};

export const NavBar = () => {
  const [handleShow, setHandleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setHandleShow(true);
    } else {
      setHandleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`${Classnames.Nav} ${handleShow && Classnames.Nav_Black}`}>
      <div className={Classnames.Nav_Contents}>
        <img className={Classnames.Nav_Logo} src={Svgs.NETFLIX_LOGO.default} />
        <img
          className={Classnames.Nav_Avatar}
          src={Svgs.NETFLIX_AVATAR.default}
        />
      </div>
    </div>
  );
};
