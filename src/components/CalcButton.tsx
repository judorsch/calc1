interface ButtonProps{
  change: (text:string) =>void,
  op:string,
  num1:number,
  num2:number,
}

export const CalcButton = ({change, op, num1, num2}: ButtonProps): JSX.Element => {
  const operations = ["+", "-", "*", "/", "^", "%"];
  const calc = () =>  {
    if(operations.includes(op)){      
    }
    else{
      change("Invalid Answer")
    }
  }

  return <button className = "space" onClick={() => calc()}>Calculate</button>
}