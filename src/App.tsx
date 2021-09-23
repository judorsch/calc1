import React, { useState } from 'react';
import { CalcButton } from './components/CalcButton';
import './App.css';
import {Entry} from './components/Entry';
import {OpEntry} from './components/OpEntry';

function App():JSX.Element {
  const [answer, setAnswer] = useState<string>("");
  const [op, setOp] = useState<string>("");
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  console.log(num1);
  console.log(op);
  console.log(num2);
  return (
    <div className="App">
      <h1>Calculator App</h1>
      <p>Input a number, an operation, and then another number.  The supported operations are +, -, *, /, ^, and %.</p>
      <div id="calculate">
        <p>Happy Calculating!</p>
        <Entry setNum={setNum1} num ={num1}></Entry>
        <OpEntry setOp={setOp} op={op}></OpEntry>
        <Entry setNum={setNum2} num = {num2}></Entry>
        <p> = {answer}</p>
      </div>
      <CalcButton change={setAnswer} op={op} num1 = {num1} num2={num2}></CalcButton>      
    </div>

  );
}

export default App;
