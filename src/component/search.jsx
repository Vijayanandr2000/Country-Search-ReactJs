import React from "react";

const Search = ({ inputTxt }) => {
  console.log({ inputTxt });
  return (
    <div>
      <h1>{inputTxt}</h1>
    </div>
  );
};

export default Search;
