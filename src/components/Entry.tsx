interface entry{
  setNum:(num:number) =>void,
  num:number,
}
export function Entry({setNum, num}:entry): JSX.Element{
  return(
    <input value={num} type="number" onChange={e=>setNum(+e.target.value)}></input>)
  }