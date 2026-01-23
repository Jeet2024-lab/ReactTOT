import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './component/Gallery'
import StateHandlingHook from './component/StateHandlingHook'


function App() {
function doIncrement(){
  setCount(count+20);
}
//logic part
  return (
    <>
    <div className="container">
      <h2 style={{color:"white",backgroundColor:"brown"}}>Welcome to ABES Engineering College </h2>
      <h3><b>Information Technology</b></h3>
      <Gallery/>
      <StateHandlingHook/>
      <h2>Count={count}</h2>
      <button onClick={doIncrement}>Increment</button>

      

      </div>
    </>
  )
}

export default App
