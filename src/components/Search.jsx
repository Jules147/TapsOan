import React from "react";
import "./Search.css";

const Search = (props) => {
  return (
    <div className="bottom">
      {props.err === false ? (
        <pre className="where">Where are ye...?</pre>
      ) : (
        <pre className="whereNot">That's not a valid city</pre>
      )}

      <input
        type="text"
        name="searchbar"
        placeholder="Add city and 'Enter'"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            props.updateInput(event.target.value);
          }
        }}
      />
    </div>
  );
};

export default Search;
