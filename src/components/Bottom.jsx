import React from "react";
import "./Bottom.css";

const Bottom = (props) => {
  return (
    <div id="bottom">
      {props.err === false ? (
        <pre id="where">Where are ye...?</pre>
      ) : (
        <pre id="whereNot">That's not a valid city</pre>
      )}

      {/* <pre id="where">"Where are ye...?</pre> */}
      <input
        type="text"
        name="searchbar"
        placeholder="Add city and press 'Enter'"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            props.updateInput(event.target.value);
          }
        }}
      />
    </div>
  );
};

export default Bottom;
