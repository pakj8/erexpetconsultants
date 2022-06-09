import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VisibilitySensor from "react-visibility-sensor";
import CounterUp from "./CouterUp";
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import { motion } from "framer-motion";

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

      <div className="col-lg-3 col-md-6">
        <motion.div
          whileHover={{ scale: 1.5 }}
          style={{ backgroundColor: "teal", color: "white" }}
          className="card text-center"
        >
          <div className="card-header">
            <FontAwesomeIcon
              icon={faHourglassEnd}
              spin
              className="fontAwesome"
            />
          </div>
          <div className="card-body">
            <h1 className="card-title">
              #<CountUp start={0} end={1} duration={2} />
            </h1>
            <h2>Company</h2>
          </div>
        </motion.div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div
          style={{ backgroundColor: "teal", color: "white" }}
          className="card text-center"
        >
          <div className="card-header">
            <FontAwesomeIcon
              icon={faHourglassEnd}
              spin
              className="fontAwesome"
            />
          </div>
          <div className="card-body">
            <h1 className="card-title">
              <CountUp start={0} end={10} duration={2} />K
            </h1>
            <h4>Application Experience</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div
          style={{ backgroundColor: "teal", color: "white" }}
          className="card text-center"
        >
          <div className="card-header">
            <FontAwesomeIcon
              icon={faHourglassEnd}
              spin
              className="fontAwesome"
            />
          </div>
          <div className="card-body">
            <h1 className="card-title">
              <CountUp start={0} end={50} duration={2} />K
            </h1>
            <h2>Seeking Advices</h2>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div
          style={{ backgroundColor: "teal", color: "white" }}
          className="card text-center"
        >
          <div className="card-header">
            <FontAwesomeIcon
              icon={faHourglassEnd}
              spin
              className="fontAwesome"
            />
          </div>
          <div className="card-body">
            <h1 className="card-title">
              <CountUp start={0} end={100} duration={2} />%
            </h1>
            <h2>Success Mission</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
