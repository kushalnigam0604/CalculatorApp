import React from "react";
import "./CalcInput.css";

const CalcInput = ({ input, result }) => {
  return (
    <>
      <input type="text" value={input ? input : "0"} readOnly />
      <input type="text" className="result" value={result ? '= ' + result : ""} readOnly />
    </>
  );
};

export default CalcInput;
