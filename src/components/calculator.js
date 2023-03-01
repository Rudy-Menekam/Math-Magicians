import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const initialState = {
    total: 0,
    next: '',
    operation: '',
  };
  const [state, setState] = useState(initialState);
  const { total, operation, next } = state;
  const onClickHandler = (event) => {
    const TargetValue = event.target.value;
    const updateState = calculate(state, TargetValue);
    setState(updateState);
  };
  return (
    <div className="cal">
      <p>Lets do some math !</p>
      <div className="calculator">
        <div className="calculator-input">
          <div className="result">
            {total}
            {' '}
            {operation}
            {' '}
            {next}
            {' '}
          </div>
        </div>
        <div className="calculator-keypad">
          <div className="row">
            <button onClick={onClickHandler} type="button" className="keys-function" value="AC">AC</button>
            <button onClick={onClickHandler} type="button" className="keys-function" value="+/-">+/-</button>
            <button onClick={onClickHandler} type="button" className="keys-function" value="%">%</button>
            <button onClick={onClickHandler} type="button" className="keys-operators" value="÷">÷</button>
          </div>
          <div className="row">
            <button onClick={onClickHandler} type="button" className="keys-numbers" value="9">9</button>
            <button onClick={onClickHandler} type="button" className="keys-numbers" value="8">8</button>
            <button onClick={onClickHandler} type="button" className="keys-numbers" value="7">7</button>
            <button onClick={onClickHandler} type="button" className="keys-operators" value="x">x</button>
          </div>
          <div className="row">
            <button onClick={onClickHandler} type="button" className="keys-numbers" value="6">6</button>
            <button onClick={onClickHandler} type="button" className="keys-numbers" value="5">5</button>
            <button onClick={onClickHandler} type="button" className="keys-numbers" value="4">4</button>
            <button onClick={onClickHandler} type="button" className="keys-operators" value="-">-</button>
          </div>
          <div className="row">
            <button onClick={onClickHandler} type="button" className="keys-numbers" value="3">3</button>
            <button onClick={onClickHandler} type="button" className="keys-numbers" value="2">2</button>
            <button onClick={onClickHandler} type="button" className="keys-numbers" value="1">1</button>
            <button onClick={onClickHandler} type="button" className="keys-operators" value="+">+</button>
          </div>
          <div className="row">
            <button onClick={onClickHandler} type="button" className="keys-numbers key-zero" value="0">0</button>
            <button onClick={onClickHandler} type="button" className="keys-numbers" value=".">.</button>
            <button onClick={onClickHandler} type="button" className="keys-operators" value="=">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
