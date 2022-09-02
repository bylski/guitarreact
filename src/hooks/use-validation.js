import { useState, useEffect } from "react";

const useValidation = (validationFunc) => {
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const lostTouchHandler = (event) => {
    setIsTouched(true);
    setIsValid(validationFunc(inputValue));
  };

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);

    if (validationFunc(event.target.value) && isTouched) {
      setIsValid(true);
    } else if (!validationFunc(event.target.value) && isTouched) {
      setIsValid(false);
    }
  };

  return ({
    lostTouchHandler,
    inputChangeHandler,
    isValid,
    isTouched,
    inputValue,
  })
};

export default useValidation;
