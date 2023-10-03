import React from "react";
import "./CalcButtons.css";

const CalcButtons = ({ handleButtonClick, handleEqualsClick, handleClearAll, handleClearLast}) => {
  return (
    <div className="calcButtons">
      <div className="fourButtonsList">
        <div
          className="buttonClass spClass"
          onClick={() => handleClearAll()}
        >
          CE
        </div>
        <div
          className="buttonClass spClass"
          onClick={() => handleClearAll()}
        >
          C
        </div>
        <div
          className="buttonClass spClass"
          onClick={() => handleClearLast()}
        >
          B
        </div>
        <div
          className="buttonClass spClass"
          onClick={() => handleButtonClick("/")}
        >
          /
        </div>
      </div>
      <div className="fourButtonsList">
        <div className="buttonClass" onClick={() => handleButtonClick("7")}>
          7
        </div>
        <div className="buttonClass" onClick={() => handleButtonClick("8")}>
          8
        </div>
        <div className="buttonClass" onClick={() => handleButtonClick("9")}>
          9
        </div>
        <div
          className="buttonClass spClass"
          onClick={() => handleButtonClick("*")}
        >
          *
        </div>
      </div>
      <div className="fourButtonsList">
        <div className="buttonClass" onClick={() => handleButtonClick("4")}>
          4
        </div>
        <div className="buttonClass" onClick={() => handleButtonClick("5")}>
          5
        </div>
        <div className="buttonClass" onClick={() => handleButtonClick("6")}>
          6
        </div>
        <div
          className="buttonClass spClass"
          onClick={() => handleButtonClick("-")}
        >
          -
        </div>
      </div>
      <div className="fourButtonsList">
        <div className="buttonClass" onClick={() => handleButtonClick("1")}>
          1
        </div>
        <div className="buttonClass" onClick={() => handleButtonClick("2")}>
          2
        </div>
        <div className="buttonClass" onClick={() => handleButtonClick("3")}>
          3
        </div>
        <div
          className="buttonClass spClass"
          onClick={() => handleButtonClick("+")}
        >
          +
        </div>
      </div>
      <div className="fourButtonsList">
        <div className="buttonClass spClass"></div>
        <div className="buttonClass" onClick={() => handleButtonClick("0")}>
          0
        </div>
        <div
          className="buttonClass spClass"
          onClick={() => handleButtonClick(".")}
        >
          .
        </div>
        <div
          className="buttonClass spClass"
          onClick={() => handleEqualsClick()}
        >
          =
        </div>
      </div>
    </div>
  );
};

export default CalcButtons;
