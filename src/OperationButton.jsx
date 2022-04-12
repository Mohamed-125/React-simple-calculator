import React, { useContext, useStatet } from "react";
import { NumbersContext } from "./App";

const Operation = ({ operation }) => {
  const [
    currentNumbers,
    setCurrentNumbers,
    prevNumbers,
    setPrevNumbers,
    setOperation,
    currentOperation,
  ] = useContext(NumbersContext);

  const clickOperationHandler = () => {
    if (prevNumbers === "") {
      setPrevNumbers(currentNumbers);
      setCurrentNumbers("");
      setOperation(operation);
    }
    if (prevNumbers && !currentNumbers) {
      setOperation(operation);
    }
    if (currentNumbers && prevNumbers) {
      console.log(operation);
      console.log(prevNumbers);
      console.log(currentNumbers);
      let result = "";
      switch (currentOperation) {
        case "+":
          result = parseInt(prevNumbers) + parseInt(currentNumbers);
          setOperation(operation);

          break;
        case "-":
          result = parseInt(prevNumbers) - parseInt(currentNumbers);
          setOperation(operation);

          break;
        case "*":
          result = parseInt(prevNumbers) * parseInt(currentNumbers);
          setOperation(operation);

          break;
        case "÷":
          result = parseInt(prevNumbers) / parseInt(currentNumbers);
          setOperation(operation);

          break;
      }
      setCurrentNumbers("");

      setPrevNumbers(result.toString());
    }
  };

  return <button onClick={clickOperationHandler}>{operation}</button>;
};

export default Operation;
