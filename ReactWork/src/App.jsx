import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './component/Gallery'
import StateHandlingHook from './component/StateHandlingHook'
import ImageManipulation from './component/ImageManipulation'
import UseEffectWork from './component/UseEffectWork'


function App() {

//logic part
  return (
    <>
    <div className="container">
      <h2 style={{color:"white",backgroundColor:"brown"}}>Welcome to ABES Engineering College </h2>
      <h3><b>Information Technology</b></h3>
      <Gallery/>
      <StateHandlingHook/>
      <ImageManipulation/>
      <UseEffectWork/>
      
      

      

      </div>
    </>
  )
}

export default App
