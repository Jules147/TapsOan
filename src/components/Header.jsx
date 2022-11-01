import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <header>
      <div id="taps"> </div>
      Taps
      <pre id="onOff">{props.temp < 15 ? <h2> Oan </h2> : <h2> Aaf </h2>}</pre>
    </header>
  );
};

export default Header;
