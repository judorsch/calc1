interface ButtonProps{
  change: (text:string) =>void,
  op:string,
  num1:string,
  num2:string,
}

export const CalcButton = ({change, op, num1, num2}: ButtonProps): JSX.Element => {
  const operations = ["+", "-", "*", "/", "^", "%"];
  function calculate(numA:number, numB:number){
    if(op === "+"){
      change(JSON.stringify(numA + numB))
    }
    else if(op === "-"){
      change(JSON.stringify(numA - numB))
    }
    else if(op === "*"){
      change(JSON.stringify(numA * numB))
    }
    else if(op === "/"){
      const result = JSON.stringify(numA / numB);
      if(result === 'null'){
        change("Invalid Input")
      }
      else{
        change(result)
      }
    }
    else if(op === "^"){
      const result = JSON.stringify(numA ** numB);
      if(result === 'null'){
        change("Invalid Input")
      }
      else{
        change(result)
      }
    }
    else{
      const result = JSON.stringify(numA % numB);
      if(result === 'null'){
        change("Invalid Input")
      }
      else{
        change(result)
      }
    }

  }
  const calc = () =>  {
    const numA = parseFloat(num1);
    const numB = parseFloat(num2);
    if(operations.includes(op) && (!isNaN(numA)) && (!isNaN(numB))){
      calculate(numA, numB);      
    }
    else{
      change("Invalid Input")
    }
  }

  return <button id = "space" onClick={() => calc()}>Calculate!</button>
}