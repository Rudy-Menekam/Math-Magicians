import React from 'react';
import KeyFunctions from './key-functions';

function Calculator() {
  return (
    <div className="calculator">
      <div className="calculator-input">
        <div className="result"><span>0</span></div>
      </div>
      <div className="calculator-keypad">
        <KeyFunctions />
        <div className="row">
          <button type="button" className="keys-numbers">9</button>
          <button type="button" className="keys-numbers">8</button>
          <button type="button" className="keys-numbers">7</button>
          <button type="button" className="keys-operators">x</button>
        </div>
        <div className="row">
          <button type="button" className="keys-numbers">6</button>
          <button type="button" className="keys-numbers">5</button>
          <button type="button" className="keys-numbers">4</button>
          <button type="button" className="keys-operators">-</button>
        </div>
        <div className="row">
          <button type="button" className="keys-numbers">3</button>
          <button type="button" className="keys-numbers">2</button>
          <button type="button" className="keys-numbers">1</button>
          <button type="button" className="keys-operators">+</button>
        </div>
        <div className="row">
          <button type="button" className="keys-numbers key-zero">0</button>
          <button type="button" className="keys-numbers">.</button>
          <button type="button" className="keys-operators">=</button>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
