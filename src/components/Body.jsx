import React from "react";
import "./Body.css";
import Mist from "./images/mist.png";
import BrokenClouds from "./images/brokenClouds.png";
import ClearSky from "./images/clearSky.png";
import Coat from "./images/coat.png";
import FewClouds from "./images/fewClouds.png";
import Clouds from "./images/clouds.png";
import LightRain from "./images/lightRain.png";
import Rain from "./images/rain.png";
import ScatteredClouds from "./images/scatteredClouds.png";
import Shorts from "./images/shorts.png";
import ShowerRain from "./images/showerRain.png";
import Snow from "./images/snow.png";
import Thunderstorm from "./images/thunderstorm.png";
import Clear from "./images/clear.png";
import Tapsoan from "./images/tapsoan.svg";
import Tapsaaf from "./images/tapsaaf.svg";
import "./Body.css";

const now = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// const now = new Date();

// const today = days[dayIndex];
// const todayPlusOne = days[dayIndex + 2];

// const daysdayaftertomorrow = (daystomorrow + 1) % days.length;
// const dayaftertomorrow = days[daysdayaftertomorrow];

const Body = (props) => {
  const imageMap = {
    Mist: Mist,
    BrokenClouds: BrokenClouds,
    ClearSky: ClearSky,
    Coat: Coat,
    Clouds: Clouds,
    FewClouds: FewClouds,
    LightRain: LightRain,
    Rain: Rain,
    ScatteredClouds: ScatteredClouds,
    Shorts: Shorts,
    ShowerRain: ShowerRain,
    Snow: Snow,
    Thunderstorm: Thunderstorm,
    Clear: Clear,
    Tapsaaf: Tapsaaf,
    Tapsoan: Tapsoan,
  };

  if (props.weather.list === undefined) {
    return <p>loading</p>;
  }

  return (
    <>
      <div id="mapcast">
        <h3 id="dress">Dress Appropriately! </h3>
        <div id="clothes">
          {props.weather.list[0].main.temp_max < 15 ? (
            <div>
              {/* <img className={tapsoan} alt="" src={Tapsoan}></img> */}
              <img
                className="tapsoan"
                alt={props.weather.list[0].weather[0].description}
                src={Tapsoan}
              ></img>
              <pre className="taps">Get yer Tapsoan!!!</pre>
            </div>
          ) : (
            <div>
              {/* <img className={tapsaaf} alt="" src={Tapsaaf}></img> */}
              <img className="tapsaaf" alt="" src={Tapsaaf}></img>
              <pre className="taps">Get yer Tapsaaf!!!</pre>
            </div>
          )}
        </div>

        <h3 id="fore">Forecast: </h3>

        <div id="forecast">
          {props.weather &&
            props.weather.list.map((item, index) => {
              if (index === 0) {
                return (
                  <div key={index} className={"day"}>
                    <h4>
                      <b>{days[now.getDay()]}</b>
                    </h4>
                    <img
                      id="futureImage"
                      alt={item.weather[0].description}
                      src={imageMap[item.weather[0].main]}
                    />
                    <h4>
                      {" "}
                      <b>{Math.round(item.main.temp_max)}°C</b>
                    </h4>
                  </div>
                );
              }
              if (index === 8) {
                return (
                  <div key={index} className={"day"}>
                    <h4>
                      <b>
                        {now.setTime(now.getTime() + 86400000) &&
                          days[now.getDay()]}
                      </b>
                    </h4>
                    <img
                      id="futureImage"
                      alt={item.weather[0].description}
                      src={imageMap[item.weather[0].main]}
                    />
                    <h4>
                      <b>{Math.round(item.main.temp_max)}°C</b>
                    </h4>
                  </div>
                );
              }
              if (index === 16) {
                return (
                  <div key={index} className={"day"}>
                    <h4>
                      <b>
                        {now.setTime(now.getTime() + 86400000) &&
                          days[now.getDay()]}
                      </b>
                    </h4>
                    <img
                      id="futureImage"
                      alt={item.weather[0].description}
                      src={imageMap[item.weather[0].main]}
                    />
                    <h4>
                      <b>{Math.round(item.main.temp_max)}°C</b>
                    </h4>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </>
  );
};

export default Body;
