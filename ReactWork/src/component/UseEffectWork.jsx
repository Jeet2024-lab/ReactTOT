import React, { useState,useEffect } from 'react'

function UseEffectWork() {
    const [counter,setCounter]=useState(20);
    const [pointer,setPointer]=useState(100);
    const [data,setData]=useState([]);

    function IncrementValue(){
        setCounter(counter+2);
       

    }

    function pointerValue(){
        setPointer(pointer-5);
    }
   

    async function getData(){
    const res=await fetch('https://fakestoreapi.com/products');
    const response=await res.json();
    setData(response);
    console.log(data);
        }
    useEffect(()=>{
        console.log(counter),
        // console.log(pointer)},[counter,pointer]);
      getData();
    },[]);
        

  return (
    <>
    <div>UseEffectWork</div>
    Counter value={counter};
    Pointer value={pointer};
    <div>
        <button onClick={IncrementValue}>Counter</button>
        <button onClick={pointerValue}>Pointer</button>
        <button onClick={getData}>getData</button>
    </div>
    </>
  )
}

export default UseEffectWork