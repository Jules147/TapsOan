import React from "react";
import "./Schpeel.css";

const Schpeel = (props) => {
  return (
    <>
      <div className="schpeel">
        <div className="tapsaff">
          <b> Taps-Aff (Scots Vernacular)</b>{" "}
          <i>
            Literally "tops off." The removing of one's shirt in the event of
            warm weather, a phenomenon rarely seen in Glasgow. Now an expression
            describing good times being had.
          </i>
        </div>
        <div className="antonym">
          <b>Antonym:</b>
          <i> Taps-Oan, "tops on".</i>
        </div>
        <div className="currentweather">
          <div>
            <b> Current Weather: </b>
          </div>
          <div className="cweather">
            <b>
              <i>{props.main}</i>
            </b>
          </div>
        </div>
        <div className="temperature">
          <div className="temp">
            <b>Temperature:</b>
          </div>
          <div className="numdeg">
            <div className="number">
              <b> {Math.round(props.temp)}</b>
            </div>
            <div className="degrees">°C.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schpeel;
