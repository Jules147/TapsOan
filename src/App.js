import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import City from "./components/City";
import Text from "./components/Text";
import Instruction from "./components/Instruction";
import Search from "./components/Search";
import WeatherLinks from "./components/WeatherLinks";
import OnOff from "./components/OnOff";
// ok to store getApiURL in config.js file?
import { getApiURL } from "./config";

const App = () => {
  const [weather, setWeather] = useState("");

  const [input, setInput] = useState("London");

  const [err, setErr] = useState(false);

  // FUNCTION TRIGGERED FROM USER'S INPUT
  const updateInput = (event) => {
    setInput(event);
  };

  // FUNCTION THAT CALLS API AND UPDATES STATE WITH WEATHER DATA

  async function getApiData() {
    try {
      const response = await axios.get(getApiURL(input));

      console.log(response.data);
      setErr(false);
      setWeather(response.data);
    } catch (error) {
      setErr(true);
    }
  }

  useEffect(() => {
    getApiData();
  }, [input]);

  if (!weather) return <p>Loading</p>;
  const { main, weather: w } = weather.list[0];
  return (
    <>
      <City input={input} />
      <OnOff temp={main.temp} />
      <Text
        main={w[0].main}
        // weather.main && weather.main.temp
        temp={main.temp}
      />
      <Instruction weather={weather} />
      <Search updateInput={updateInput} err={err} />
      <WeatherLinks />
    </>
  );
};

export default App;
