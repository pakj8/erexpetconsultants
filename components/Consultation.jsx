import React, { useEffect, useState } from "react";
import Form from "./Form";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Consultation() {
  const { ref, inView } = useInView();
  const animations = useAnimation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) {
      animations.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.4,
        },
      });
    }
  });

  function handleClick() {
    setShow(!show);
  }

  return (
    <motion.div
      style={{ backgroundColor: "#417d7a" }}
      id="consultation"
      className="consultation-section row"
    >
      <div style={{ color: "white" }} className="col">
        <h1 className="pt-10 mt-10  text-center display-4 titleColor">
          Need Consultations
        </h1>
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>
          If you would like to process your application , the best way to start
          is to have a consultation with one of our experienced consultants.
        </p>
      </div>
      <div>
        <motion.a
          onClick={handleClick}
          animate={animations}
          whileHover={{ scale: 1.2 }}
          style={{ position: "relative", bottom: "1%" }}
          type="button"
          className="btn  btn-primary btn-lg"
        >
          Make a Appointment
        </motion.a>
        {show && <Form />}
      </div>
    </motion.div>
  );
}

export default Consultation;
