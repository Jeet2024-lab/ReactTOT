import React ,{useState} from 'react'
import cat1 from './cat1.png'

function ImageManipulation() {

const [height,setHeight]=useState(300);
const [width,setWidth]=useState(300);

const [red,setRed]=useState(0);
const [green,setGreen]=useState(0);
const [blue,setBlue]=useState(0);
const [imageRotate,setimageRotate]=useState(90);
     function increaseHeight(){
        setHeight(height+30);

     }
      function increaseWidth(){
setWidth(width+30);
     }

     function changeBGColor(){
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);
     }

      function setimageAngle(){
        setimageRotate(imageRotate+90);

      }


  return (
    <>
    <div>ImageManipulation</div>
    <div style={{ border:'2px solid black',height:'300px',width:'300px',marginLeft:'500px',paddingTop:'14px',backgroundColor:`rgb(${red},${green},${blue})`}}>
        <img src={cat1} height={height} width={width}style={{transform :`rotate(${imageRotate}deg)`}}  />
    </div>
    <div style={{marginTop:'50px',marginBottom:'30px',}}>
        <button onClick={increaseHeight}>IncreaseHeight</button>
        <button onClick={increaseWidth}>IncreaseWidth</button>
        <button onClick={changeBGColor}>Change BG Color</button>
        <button onClick={setimageAngle}>Image Rotate</button>
    </div>
    </>
  )
}

export default ImageManipulation
