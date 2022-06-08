import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import VisibilitySensor from "react-visibility-sensor";
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";

function CounterUp(props) {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [animate, setAnimate] = useState(false);

  return (
    <motion.div ref={ref} className="couter-up">
      <div className="content">
        <motion.div whileHover={{ scale: 1.5 }} className="box">
          <div className="icon">
            <h4>
              <FontAwesomeIcon
                icon={faHourglassEnd}
                spin
                className="fontAwesome"
              />
            </h4>
            <div className="counter">
              <h3>
                <CountUp start={props.start} end={props.end} duration="2">
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start}>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h3>
            </div>
            <div className="text">
              <h4>{props.text}</h4>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default CounterUp;
