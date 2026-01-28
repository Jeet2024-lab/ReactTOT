import React from "react";
import "./profile.css";

function Profile(props) {
  return (
    <>
    <div className="outer">
      <img src={props.pic} alt="" height={100} width={100} />
      <h1>{props.desc}</h1>


      <div className="inner">
        <div className="box">
                <div className="jeet">
        <h3>
          Name:<br></br>
          {props.name}
        </h3>
        <br></br>
        <h3>
          Student ID Number:<br></br>
          {props.IDN}
        </h3>
        <h3>
          Card Number:<br></br>
          {props.CardN}
        </h3>
        <h3>
          Start Date :<br></br>
          {props.StartD}
        </h3>
      </div>

      <div className="barcode">
        <button>Student</button>
        <img src={props.barcode} alt="barcode" />
      </div>
</div>
      <div>
        <img src={props.pic1} alt="not to display"  height={100} width={100}/>
      </div>
    </div>
    </div>
    </>
  );
}

export default Profile;
