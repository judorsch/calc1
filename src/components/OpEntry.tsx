interface opEntry{
    setOp:(text:string) => void
    op:string
    id:string
}


export const OpEntry = ({setOp, op, id}: opEntry): JSX.Element => {
    return(
        <input className ="op" id ={id} value={op} type="text" onChange={e=>setOp(e.target.value)}></input>)
  }