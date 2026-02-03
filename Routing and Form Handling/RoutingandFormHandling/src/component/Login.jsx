import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Login({logdata}) {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()

    const navigate=useNavigate();

    function verification(e){
      e.preventDefault();
      // alert(email+password)
       console.log(logdata);
if(logdata.email==email){


  if(logdata.password==password){
    // alert("Login Success")
    navigate('/dashboard');
  }
  
else{
    alert("Password is invalid");
}}
}
  return (
    <div><form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} 
    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={verification} className="btn btn-primary">Login</button>
</form></div>
  )
}

export default Login