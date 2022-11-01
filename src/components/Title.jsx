import React from "react";
import "./Title.css";

const Title = (props) => {
  return (
    <>
      <div className="title">
        <h1>In {props.input}, the weather is </h1>
      </div>
    </>
  );
};

export default Title;
