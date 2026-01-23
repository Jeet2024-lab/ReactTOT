import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './component/Gallery'


function App() {

//logic part
  return (
    <>
    <div className="container">
      <h2 style={{color:"white",backgroundColor:"brown"}}>Welcome to ABES Engineering College </h2>
      <h3><b>Information Technology</b></h3>
      <Gallery/>

      

      </div>
    </>
  )
}

export default App
