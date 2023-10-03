import React, { useState, useEffect } from "react";
import "./Calculator.css";
import CalcButtons from "../CalcButtons/CalcButtons";
import CalcInput from "../CalcInput/CalcInput";
import Header from "../Header/Header";
import HistoryPanel from "../HistoryPanel/HistoryPanel";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("0");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("calculatorHistory"));
    if (storedHistory) {
      setHistory(storedHistory);
    }
  }, []);
  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleEqualsClick = () => {
    const newResult = eval(input);
    setResult(newResult.toString());
    const historyValue = input + " = " + newResult;
    setHistory((prevHistory) => [...prevHistory, historyValue]);
  };
  const handleClearAll = () => {
    setInput("");
    setResult("");
  };
  const handleClearLast = () => {
    setInput(input.slice(0, -1));
  };
  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("calculatorHistory");
  };
  const handleToggleHistory = () => {
    setShowHistory(!showHistory);
  };
  useEffect(() => {
    localStorage.setItem("calculatorHistory", JSON.stringify(history));
  }, [history]);
  return (
    <div className="calculator">
      <div>
        <Header handleToggleHistory={handleToggleHistory} />
        <CalcInput input={input} result={result} />
        <CalcButtons
          handleButtonClick={handleButtonClick}
          handleEqualsClick={handleEqualsClick}
          handleClearAll={handleClearAll}
          handleClearLast={handleClearLast}
        />
      </div>
      {showHistory && (
        <HistoryPanel
          history={history}
          clearHistory={clearHistory}
          onClose={handleToggleHistory}
        />
      )}
    </div>
  );
};

export default Calculator;
