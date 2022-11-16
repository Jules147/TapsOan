import React from "react";
import "./City.css";

const City = (props) => {
  return (
    <>
      <div className="title">
        <h1>In {props.input}, the weather is</h1>
      </div>
    </>
  );
};

export default City;
