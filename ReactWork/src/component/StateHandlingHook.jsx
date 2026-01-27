import React from 'react'
import { useState } from 'react'

function StateHandlingHook() {
    function doIncrement(){
  setCount(count+20);
}

function doDecrement(){
  setCount(count-20);
}
    const [count,setCount]=useState(20);
  return (
    <>
    <h2>State Handling Hook</h2>
    <h2>Count={count}</h2>
    <button onClick={doIncrement}>Increment</button>
      <button onClick={doDecrement}>Decrement</button>
  </>
  )
}

export default StateHandlingHook