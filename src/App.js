import React, { useState, createContext } from "react";
import "./styles.css";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
export const NumbersContext = createContext();
const App = () => {
  const [currentNumbers, setCurrentNumbers] = useState("");
  const [prevNumbers, setPrevNumbers] = useState("");
  const [currentOperation, setOperation] = useState("");
  const deleteHandler = (e) => {
    switch (e.target.innerText) {
      case "AC":
        setCurrentNumbers("");
        setPrevNumbers("");
        break;
      case "DEL":
        setCurrentNumbers(currentNumbers.slice(0, -1));
    }
  };

  const showResult = () => {
    let result = "";
    switch (currentOperation) {
      case "+":
        result = parseInt(prevNumbers) + parseInt(currentNumbers);

        break;
      case "-":
        result = parseInt(prevNumbers) - parseInt(currentNumbers);

        break;
      case "*":
        result = parseInt(prevNumbers) * parseInt(currentNumbers);

        break;
      case "÷":
        result = parseInt(prevNumbers) / parseInt(currentNumbers);

        break;
    }
    setPrevNumbers("");

    setCurrentNumbers(result.toString());
  };
  return (
    <NumbersContext.Provider
      value={[
        currentNumbers,
        setCurrentNumbers,
        prevNumbers,
        setPrevNumbers,
        setOperation,
        currentOperation,
      ]}
    >
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">
            {prevNumbers} {prevNumbers && currentOperation}
          </div>
          <div className="current-operand">{currentNumbers}</div>
        </div>
        <button onClick={deleteHandler} className="span-two">
          AC
        </button>
        <button onClick={deleteHandler}>DEL</button>
        <OperationButton operation="÷" />
        <DigitButton digit="1" />
        <DigitButton digit="2" />
        <DigitButton digit="3" />
        <OperationButton operation="*" />
        <DigitButton digit="4" />
        <DigitButton digit="5" />
        <DigitButton digit="6" />
        <OperationButton operation="+" />
        <DigitButton digit="7" />
        <DigitButton digit="8" />
        <DigitButton digit="9" />
        <OperationButton operation="-" />
        <DigitButton digit="." />
        <DigitButton digit="0" />
        <button onClick={showResult} className="span-two">
          =
        </button>
      </div>
    </NumbersContext.Provider>
  );
};

export default App;
