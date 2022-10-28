import './App.scss';
import React, { useEffect, useState } from 'react';

export default function App() {

  const [arithmetic, setArithmetic] = useState("")
  const [input, setInput] = useState("0")

  const clearInputs = () => {
    setArithmetic("")
    setInput("0")
  }

  const handleOperator = (event) => {
    const currentOperator = event.target.value
    if (arithmetic.length) { // prevents from using operator as first value
      setInput(currentOperator)

      const beforeLastChar = arithmetic.charAt(arithmetic.length - 2)
      const beforeLastCharIsOperator = beforeLastChar.match(/["+,\/,*,\-"]/)

      const lastChar = arithmetic.charAt(arithmetic.length - 1)
      const lastCharIsOperator = lastChar.match(/["+,\/,*,\-"]/)

      if ((lastCharIsOperator && currentOperator !== "-") || (beforeLastCharIsOperator && lastCharIsOperator)) {
        if (beforeLastCharIsOperator) {
          const updatedVal = arithmetic.substring(0, arithmetic.length - 2) + currentOperator
          setArithmetic(updatedVal)
        } else {
          setArithmetic(arithmetic.substring(0, arithmetic.length - 1) + currentOperator)
        }
      } else {
        setArithmetic(arithmetic + currentOperator)
      }
    }
  }

  const numberClick = (event) => {
    const currentInput = event.target.value

    if (!arithmetic.length) { // if not empty
      setArithmetic(currentInput)
      setInput(currentInput)
    } else {
      if (currentInput === '0' && (arithmetic === '0' || input === '0')) { // prevent multiple zeros
        setArithmetic(arithmetic)
      } else {
        const lastChar = arithmetic.charAt(arithmetic.length - 1)
        const isLastCharOperator = lastChar.match(/["+,\/,*,\-"]/)

        setArithmetic(arithmetic + currentInput)
        setInput(isLastCharOperator ? currentInput : input + currentInput)
      }
    }
  }

  const handleDecimal = () => {
    const lastChar = arithmetic.charAt(arithmetic.length - 1)
      if (!arithmetic.length) { // if not empty
        setArithmetic("0.")
        setInput("0.")
      } else {
        if (lastChar.match(/["+,\/,*,\-"]/)) {
          setArithmetic(arithmetic + "0.")
          setInput("0.")
        } else {
          setInput(lastChar === "." || input.includes(".") ? input : input + ".") // prevents multiple decimals
          const formattedVal = lastChar === "." || input.includes(".") ? arithmetic : arithmetic + "."
          setArithmetic(formattedVal)
        }
      }
  }

  const handleEqual = () => {
    const total = eval(arithmetic)
    setArithmetic(`${total}`)
    setInput(`${total}`)
  }

  useEffect(() => {

  }, [arithmetic]) // If the arithmetic variable updates, the effect will run again


  return (
    <div className="App">
      <div className="calculator">
        <div id="arithmetic">{arithmetic}</div>
        <div id="display">{input}</div>
        <div className='container-buttons'>
          <button id="clear" value="AC" onClick={clearInputs}>AC</button>
          <button id="divide" value="/" onClick={handleOperator}>/</button>
          <button id="multiply" value="*" onClick={handleOperator}>*</button>
          <button id="seven" value="7" onClick={numberClick}>7</button>
          <button id="eight" value="8" onClick={numberClick}>8</button>
          <button id="nine" value="9" onClick={numberClick}>9</button>
          <button id="subtract" value="-" onClick={handleOperator}>-</button>
          <button id="four" value="4" onClick={numberClick}>4</button>
          <button id="five" value="5" onClick={numberClick}>5</button>
          <button id="six" value="6" onClick={numberClick}>6</button>
          <button id="add" value="+" onClick={handleOperator}>+</button>
          <button id="one" value="1" onClick={numberClick}>1</button>
          <button id="two" value="2" onClick={numberClick}>2</button>
          <button id="three" value="3" onClick={numberClick}>3</button>
          <button id="equals" value="=" onClick={handleEqual}>=</button>
          <button id="zero" value="0" onClick={numberClick}>0</button>
          <button id="decimal" value="." onClick={handleDecimal}>.</button>
        </div>
      </div>
    </div>
  );
}
