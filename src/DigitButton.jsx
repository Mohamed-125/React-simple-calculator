import React, { useContext } from "react";
import { NumbersContext } from "./App";
const DigitButton = ({ digit }) => {
  const [currentNumbers, setCurrentNumbers] = useContext(NumbersContext);
  const [dot, setDot] = React.useState(true);
  const showDigitHandler = (e) => {
    if (e.target.innerText === ".") {
      setDot(false);
    }

    if (dot) {
      setCurrentNumbers((pre) => (pre += digit));
    }
  };
  return <button onClick={showDigitHandler}>{digit}</button>;
};

export default DigitButton;
