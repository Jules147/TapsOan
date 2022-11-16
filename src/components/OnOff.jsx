import React from "react";
import "./OnOff.css";

const OnOff = (props) => {
  return (
    <header>
      {/* <div className="overflow"> */}
      <div className="taps">Taps</div>
      <div className="onOff">{props.temp < 15 ? "Oan" : "Aaf"}</div>
      {/* </div> */}
    </header>
  );
};

export default OnOff;
