import React, { useState } from 'react';

interface entry{
  setNum:(num:number) =>void,
}
export const Entry = ({setNum}:entry): JSX.Element => {
  const update = ()=>{
}

return <input type="number" id= "num" onChange = {()=>update()} ></input>
  }