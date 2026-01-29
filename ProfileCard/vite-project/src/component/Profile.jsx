import React from "react";
import "./profile.css";
import barcode from "./barcode.png";
import student from "./student.png";

function Profile(props) {
  return (
    <>
      <div className="outer">
        <div className="header">
          <img src={props.pic} alt="" height={100} width={100} />

          <h1>{props.desc}</h1>
        </div>
        <div className="inner">
          <div className="box">
            <div className="innerbox">
              <h3>
                Name:<br></br>
                {props.name}
              </h3>
              <br />
              <h3>
                Student ID Number:<br></br>
                {props.IDN}
              </h3>
              <br />
              <h3>
                Card Number:<br></br>
                {props.CardN}
              </h3>
              <br />
              <h3>
                Start Date :<br></br>
                {props.StartD}
              </h3>
            </div>

            <div className="barcode">
              <br />
              <br />
              <br />
              <br />
              <br />
              <button>Student</button>
              <br />
              <br />
              <img src={barcode} alt="barcode" />
            </div>
          </div>
          <div className="spic">
            <img src={student} alt="not to display" height={300} width={200} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
