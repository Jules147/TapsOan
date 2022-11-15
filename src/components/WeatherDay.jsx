import React from "react";

const WeatherDay = ({ day, description, main, temp_max }) => {
  return (
    <div className={"day"}>
      <h4>
        <b>{day}</b>
      </h4>
      <img className="futureImage" alt={description} src={main} />
      <h4>
        <b>{Math.round(temp_max)}°C</b>
      </h4>
    </div>
  );
};

export default WeatherDay;
