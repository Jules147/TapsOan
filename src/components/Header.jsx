import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <header>
      <div className="taps">Taps</div>
      <div className="onOff">{props.temp < 15 ? "Oan" : "Aaf"}</div>
    </header>
  );
};

export default Header;
