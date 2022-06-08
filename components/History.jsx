import {
  faGift,
  faPeopleLine,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import CounterUp from "./CouterUp";

function History() {
  const text = `ER Expert Consultants continues to be one of India's leading consulting
  firms having counselled lacs of clients and assisted thousands reach
  their dream destination.`;

  return (
    <div style={{ margin: 0 }} className="row history test-image">
      <h1
        style={{ position: "relative", bottom: "20%", color: "white" }}
        className="p-5 pb-7 text-start display-4 "
      >
        Where We Come From?
      </h1>
      <p
        style={{
          position: "relative",
          bottom: "10%",
          color: "white",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        {text}
      </p>
      <div className="col-lg-3 col-md-6  mt-4">
        <CounterUp start={0} end={1} text="No. 1 Company" />
      </div>
      <div className="col-lg-3 col-md-6 mt-4">
        <CounterUp start={0} end={10000} text="Application Experience" />
      </div>
      <div className="col-lg-3 col-md-6 mt-4">
        <CounterUp start={0} end={50000} text="Seeking Advices" />
      </div>
      <div className="col-lg-3 col-md-6 mt-4">
        <CounterUp start={0} end={100} text="Success Mission" />
      </div>
    </div>
  );
}

export default History;
