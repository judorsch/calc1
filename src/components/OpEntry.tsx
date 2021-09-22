interface opEntry{
    setOp:(text:string) => void
    op:string
}

export const OpEntry = ({setOp, op}: opEntry): JSX.Element => {
    const update = ()=>{
        setOp(op);
    }

    return <input id= "op" onChange = {()=>update()} ></input>
  }