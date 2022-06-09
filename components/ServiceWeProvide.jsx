import {
  faCheckCircle,
  faDollarSign,
  faFlagUsa,
  faMoneyCheckDollar,
  faPassport,
  faPlaneLock,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import Card from "./Card";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function ServiceWeProvide() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const firstAnimations = useAnimation();
  const secondAnimations = useAnimation();

  useEffect(() => {
    if (inView) {
      firstAnimations.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.4,
        },
      });
    }
    if (!inView) {
      firstAnimations.start({
        x: -1000,
      });
    }
    if (inView) {
      secondAnimations.start({
        opacity: 1,
        transition: {
          duration: 1.4,
        },
      });
    }
    if (!inView) {
      secondAnimations.start({
        opacity: 0,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <motion.div ref={ref}>
      <motion.div className="mt-20">
        <motion.h3
          animate={firstAnimations}
          className="p-5 pb-1 text-start display-3 titleColor header"
        >
          <hr
            style={{
              color: "#3C2C3E",
              position: "relative",
              top: "35px",
              width: "60px",
              height: "5px",
            }}
          />
          Services We Offer
        </motion.h3>
      </motion.div>

      <div style={{ color: "black" }} className="weOfferCard container">
        <motion.div animate={secondAnimations} className="row row-cols-auto">
          <div className="col-lg-4 col-md-6 titleColor">
            <Card image="/visa1.png" text="Student Visa" />
          </div>
          <div className="col-lg-4 col-md-6 titleColor">
            <Card image="/passport.png" text="Immigration" />
          </div>
          <div className="col-lg-4 col-md-6 titleColor">
            <Card image="/departure.png" text="Visitor Visa" />
          </div>
          <div className="col-lg-4 col-md-6 titleColor">
            <Card image="/personal.png" text="Education Loan" />
          </div>
          <div className="col-lg-4 col-md-6 titleColor">
            <Card image="/boarding-pass.png" text="Investor Visa" />
          </div>
          <div className="col-lg-4 col-md-6 titleColor">
            <Card image="/check.png" text="E-Visa" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ServiceWeProvide;
