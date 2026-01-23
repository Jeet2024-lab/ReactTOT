import React from 'react'
import { useState } from 'react'

function StateHandlingHook() {
    const [count,setCount]=useSate(20);
  return (
    <>
    <h2>State Handling Hook</h2>
    <h2>Count={count}</h2>
  </>
  )
}

export default StateHandlingHook