import React from "react";
import "./Schpeel.css";

const Schpeel = (props) => {
  return (
    <>
      <div id="schpeel">
        <div id="tapsaff">
          <b> Taps-Aff (Scots Vernacular)</b> Literally "tops off." The removing
          of one's shirt in the event of warm weather, a phenomenon rarely seen
          in Glasgow. Now an expression describing good times being had.
        </div>
        <div id="antonym">
          <b>Antonym:</b> Taps-Oan, "tops on".
        </div>
        <div id="currentweather">
          <b> Current Weather: {props.main}.</b>
        </div>
        <div id="temperature">
          <b>Temperature: {Math.round(props.temp)} °C.</b>
        </div>
      </div>
    </>
  );
};

export default Schpeel;
