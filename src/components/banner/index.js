import React from "react";
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
    effect;
    return () => {
      cleanup;
    };
  }, [input]);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header
      className={Classnames.Banner}
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV0ZmxpeHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className={Classnames.Banner_Contents}>
        <h1 className={Classnames.Banner_Title}>NETFLIX MOVIEWS</h1>
        <div className={Classnames.Banner_Buttons}>
          <button className={Classnames.Banner_Button}>Play</button>
          <button className={Classnames.Banner_Button}>My List</button>
        </div>
        <h1 className={Classnames.Banner_Description}>
          {truncate(`This is a descipttrereerer`, 100)}
        </h1>
      </div>
      <div className={Classnames.Banner_FadeBottom} />
    </header>
  );
};
