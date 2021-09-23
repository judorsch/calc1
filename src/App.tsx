import React, { useState } from 'react';
import { CalcButton } from './components/CalcButton';
import './App.css';
import {OpEntry} from './components/OpEntry';
import { Entry } from './components/Entry';

function App():JSX.Element {
  const [answer, setAnswer] = useState<string>("");
  const [op, setOp] = useState<string>("");
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  console.log(num1);
  console.log(op);
  console.log(num2);
  return (
    <div className="App">
      <h1>Calculator App</h1>
      <p>Input a number, an operation, and then another number.  The supported operations are +, -, *, /, ^, and %. Enter all fractions as decimals.</p>
      <div id="calculate">
        <p>Happy Calculating!</p>
        <OpEntry id ={"num"} setOp={setNum1} op ={num1}></OpEntry>
        <OpEntry  id ={"op"}setOp={setOp} op={op}></OpEntry>
        <OpEntry id ={"num"} setOp={setNum2} op ={num2}></OpEntry>
        <Entry setAns = {setAnswer} ans = {answer}></Entry>
      </div>
      <CalcButton change={setAnswer} op={op} num1 = {num1} num2={num2}></CalcButton>      
    </div>

  );
}

export default App;
