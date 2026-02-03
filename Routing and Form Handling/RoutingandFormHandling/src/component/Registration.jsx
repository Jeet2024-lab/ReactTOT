import React, { useState } from "react";

function Registration({regData}) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  function captureData(e) {
    e.preventDefault();
    const mydata={name,email,password}
    regData(mydata);
    
  }
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      {name}
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      {email}
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      {password}

      <button type="submit" onClick={captureData} className="btn btn-primary">
        Register
      </button>
    </form>
  );
}

export default Registration;
