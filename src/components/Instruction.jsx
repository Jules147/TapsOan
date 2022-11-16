import React from "react";
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
import "./Instruction.css";
import WeatherDay from "./WeatherDay";
import { Fragment } from "react/cjs/react.production.min";

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

const Instruction = (props) => {
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
      <div className="mapcast">
        <div className="clothes">
          <h3 className="dress">Dress Appropriately!</h3>
          {props.weather.list[0].main.temp_max < 15 ? (
            <div>
              <img
                className="tapsoan"
                alt={props.weather.list[0].weather[0].description}
                src={Tapsoan}
              ></img>
              <pre className="getyer">Get yer Tapsoan!!!</pre>
            </div>
          ) : (
            <div>
              <img
                className="tapsaaf"
                alt={props.weather.list[0].weather[0].description}
                src={Tapsaaf}
              ></img>
              <pre className="getyer">Get yer Tapsaaf!!!</pre>
            </div>
          )}
        </div>

        <div className="forecast">
          <div>
            <h3 className="fore">Forecast: </h3>
            <div className="days">
              {props.weather &&
                props.weather.list.map((item, index) => {
                  const { description, main } = item.weather[0];
                  const { temp_max } = item.main;
                  if (index === 0) {
                    return (
                      <React.Fragment key={index}>
                        <WeatherDay
                          day={days[now.getDay()]}
                          description={description}
                          main={imageMap[main]}
                          temp_max={Math.round(temp_max)}
                        />
                      </React.Fragment>
                    );
                  }
                  if (index === 8) {
                    return (
                      <React.Fragment key={index}>
                        <WeatherDay
                          day={
                            now.setTime(now.getTime() + 86400000) &&
                            days[now.getDay()]
                          }
                          description={description}
                          main={imageMap[main]}
                          temp_max={Math.round(temp_max)}
                        />
                      </React.Fragment>
                    );
                  }
                  if (index === 16) {
                    return (
                      <React.Fragment key={index}>
                        <WeatherDay
                          day={
                            now.setTime(now.getTime() + 86400000) &&
                            days[now.getDay()]
                          }
                          description={description}
                          main={imageMap[main]}
                          temp_max={Math.round(temp_max)}
                        />
                      </React.Fragment>
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instruction;
