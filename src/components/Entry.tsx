interface props{
    setAns:(text:string) => void,
    ans:string,
}

export const Entry = ({setAns, ans}: props): JSX.Element => {
    return(
        <div id ="ans">
            <label id ="equals">=</label>
            <input id ="answer" value={ans} type="text"></input>
        </div>
    )
  }