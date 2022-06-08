import React, { useEffect } from "react";
import ServicesCard from "./ServicesCard";
import "bootstrap-icons/font/bootstrap-icons.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function OtherServices() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  const secondAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.4,
        },
      });
    }
    if (!inView) {
      animation.start({ x: -1000 });
    }
    if (inView) {
      secondAnimation.start({
        x: 0,
        scale: 1,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <motion.div ref={ref} className="container">
      <div className="row">
        <motion.h3
          animate={animation}
          className="header p-5 pb-4 text-start display-4 titleColor"
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
          Other Services{" "}
          <span className="d-block titleColor h4 p-3 pt-0">We Provide</span>
        </motion.h3>

        <motion.div animate={secondAnimation} className="col-lg-3 col-md-6">
          <ServicesCard
            link={<i className="bi bi-chat-dots"></i>}
            text="Embassy Verification"
          />
        </motion.div>
        <motion.div transition={{ duration: 1 }} className="col-lg-3 col-md-6">
          <ServicesCard
            className="fontAwesome"
            link={<i className="bi bi-bag"></i>}
            text="Certificate Notarization"
          />
        </motion.div>
        <motion.div
          transition={{ duration: 1.5 }}
          className="col-lg-3 col-md-6"
        >
          <ServicesCard
            link={<i className="bi bi-mortarboard-fill"></i>}
            text="ZAB Assessment"
          />
        </motion.div>
        <motion.div transition={{ duration: 2 }} className="col-lg-3 col-md-6">
          <ServicesCard
            link={<i className="bi bi-mortarboard-fill"></i>}
            text="Education Loan Without Collateral"
          />
        </motion.div>
        <motion.div
          transition={{ duration: 2.5 }}
          className="col-lg-3 col-md-6"
        >
          <ServicesCard
            link={<i className="bi bi-mortarboard-fill"></i>}
            text="Forex Services"
          />
        </motion.div>
        <motion.div transition={{ duration: 3 }} className="col-lg-3 col-md-6">
          <ServicesCard
            link={<i className="bi bi-mortarboard-fill"></i>}
            text="Study Abroad Counselling"
          />
        </motion.div>
        <motion.div
          transition={{ duration: 3.5 }}
          className="col-lg-3 col-md-6"
        >
          <ServicesCard
            link={<i className="bi bi-mortarboard-fill"></i>}
            text="Passport Services"
          />
        </motion.div>
        <motion.div
          // initial={{ y: "100vw" }}
          // animate={{ y: 0 }}
          // transition={{ delay: 0.5, duration: 4.5, type: "spring" }}
          className="col-lg-3 col-md-6"
        >
          <ServicesCard
            link={<i className="bi bi-mortarboard-fill"></i>}
            text="Family Reunion Visa"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default OtherServices;
