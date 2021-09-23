interface ButtonProps{
  change: (text:string) =>void,
  op:string,
  num1:number,
  num2:number,
}

export const CalcButton = ({change, op, num1, num2}: ButtonProps): JSX.Element => {
  const operations = ["+", "-", "*", "/", "^", "%"];
  function calculate(){
    if(op === "+"){
      change(""+(num1 + num2))
    }
    else if(op === "-"){
      change(""+(num1 - num2))
    }
    else if(op === "*"){
      change(""+(num1 * num2))
    }
    else if(op === "/"){
      if(num2 === 0){
        change("Invalid Input")
      }
      else{
        change(""+(num1 / num2))
      }
    }
    else if(op === "^"){
      if(num1 <= 0){
        change("Invalid Input")
      }
      else{
        change(""+(num1 ^ num2))
      }
    }
    else{
      if(num2 === 0){
        change("Invalid Input")
      }
      else{
        change(""+(num1 % num2))
      }
    }

  }
  const calc = () =>  {
    if(operations.includes(op)){
      calculate();      
    }
    else{
      change("Invalid Input")
    }
  }

  return <button className = "space" onClick={() => calc()}>Calculate</button>
}