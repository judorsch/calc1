interface opEntry{
    setOp:(text:string) => void
    op:string
}


export const OpEntry = ({setOp, op}: opEntry): JSX.Element => {
    return(
        <input value={op} type="number" onChange={e=>setOp(e.target.value)}></input>)
  }