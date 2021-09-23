interface opEntry{
    setOp:(text:string) => void
    op:string
}


export const OpEntry = ({setOp, op}: opEntry): JSX.Element => {
    return(
        <input value={op} type="text" onChange={e=>setOp(e.target.value)}></input>)
  }