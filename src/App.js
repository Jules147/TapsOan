import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Title from "./components/Title";
import Schpeel from "./components/Schpeel";
import Body from "./components/Body";
import Bottom from "./components/Bottom";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
      <Title input={input} />
      <Header temp={main.temp} />
      <Schpeel
        main={w[0].main}
        // weather.main && weather.main.temp
        temp={main.temp}
      />
      <Body weather={weather} />
      <Bottom updateInput={updateInput} err={err} />
      <Footer />
    </>
  );
};

export default App;
