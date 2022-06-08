import React, { useEffect } from "react";
import Card from "./NewCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function NewCardContainer() {
  const { ref, inView } = useInView();
  const animations = useAnimation();

  useEffect(() => {
    if (inView) {
      animations.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.4,
        },
      });
    }
    if (!inView) {
      animations.start({
        x: -1000,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      style={{ backgroundColor: "#417d7a" }}
      className="border-dark container gry-bg m-0 p-5"
    >
      <motion.h3
        animate={animations}
        className="header ps-5 mb-5 pe-5  text-start display-6 titleColor"
      >
        <hr
          style={{
            color: "#062C30",
            position: "relative",
            top: "35px",
            width: "60px",
            height: "5px",
          }}
        />
        Countries Served.
      </motion.h3>

      <div className="row">
        <div className="col-lg-4 col-md-6 mt-5">
          <Card
            image="/canada.jpg"
            country="Canada"
            immigration="Canada Immigration"
          />
        </div>
        <div className="col-lg-4 col-md-6 mt-5">
          <Card
            image="/australia1.jpg"
            country="Australia"
            immigration="Australia Immigration"
          />
        </div>
        <div className="col-lg-4 col-md-6 mt-5">
          <Card
            image="/USA'.jpg"
            country="USA"
            immigration="U.S.A Immigration"
          />
        </div>
        <div className="col-lg-4 col-md-6 mt-5 ">
          <Card
            image="/singapore.jpg"
            country="Singapore"
            immigration="singapore Immigration"
          />
        </div>
        <div className="col-lg-4 col-md-6 mt-5 ">
          <Card
            image="/newzealand1.jpg"
            country="New Zealand"
            immigration="New Zealand Immigration"
          />
        </div>
        <div className="col-lg-4 col-md-6 mt-5">
          <Card image="/uk.jpg" country="UK" immigration="Uk Immigration" />
        </div>
      </div>
    </motion.div>
  );
}

export default NewCardContainer;
