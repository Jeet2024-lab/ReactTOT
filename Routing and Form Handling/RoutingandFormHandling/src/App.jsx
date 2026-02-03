import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./component/Dashboard";
import Registration from "./component/Registration";
import Login from "./component/Login";
import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [data,rdata]=useState();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login logdata={data}/>}></Route>
          <Route path="/register" element={<Registration regData={rdata}/>}></Route>
        </Routes>
      </BrowserRouter>
      {JSON.stringify(data)}
    </>
  );
}

export default App;
