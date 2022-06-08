import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";

export default function PopularCourses() {
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
      className="container"
    >
      <div className="row">
        <motion.h3
          animate={animations}
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
          Popular Courses
        </motion.h3>
        <div style={{ color: "white" }}>
          <h5
            className="text-start"
            style={{
              maxWidth: "450px",
              maxHeight: "auto",
              fontWeight: "600",
              marginLeft: "70px",
            }}
          >
            Here are some of the most trending and popular choices among
            students looking for opportunities to study abroad.
          </h5>
        </div>

        <div style={{ paddingLeft: "70px" }} className="col-lg-3 text-start">
          <h6 className="mt-3" style={{ marginBottom: "10px" }}>
            <FontAwesomeIcon
              color="black"
              className="rounded-circle flex-shrink-6"
              icon={faCheckCircle}
              size="lg"
            />
            <a style={{ color: "white" }} className="m-2 titleColor">
              Business Studies
            </a>
          </h6>
          <h6 className="mt-3" style={{ marginBottom: "10px", color: "white" }}>
            <FontAwesomeIcon
              color="black"
              className="rounded-circle flex-shrink-6"
              icon={faCheckCircle}
              size="lg"
            />
            <a style={{ color: "white" }} className="m-2">
              Engineering
            </a>
          </h6>
          <h6 className="mt-3" style={{ marginBottom: "10px" }}>
            <FontAwesomeIcon
              className="rounded-circle flex-shrink-6"
              icon={faCheckCircle}
              size="lg"
              color="black"
            />
            <a style={{ color: "white" }} className="m-2">
              Computer Science
            </a>
          </h6>
          <h6 className="mt-3" style={{ marginBottom: "10px" }}>
            <FontAwesomeIcon
              className="rounded-circle flex-shrink-6"
              icon={faCheckCircle}
              size="lg"
              color="black"
            />
            <a className="mt-3" style={{ color: "white" }}>
              Information Technology
            </a>
          </h6>
          <h6 className="mt-3" style={{ marginBottom: "10px" }}>
            <FontAwesomeIcon
              className="rounded-circle flex-shrink-6"
              icon={faCheckCircle}
              size="lg"
              color="black"
            />
            <a style={{ color: "white" }} className="m-2">
              Nursing
            </a>
          </h6>
        </div>
        <div
          style={{ paddingLeft: "70px" }}
          className="col-lg-3 mt-3 text-start"
        >
          <h6 style={{ marginBottom: "10px" }}>
            <FontAwesomeIcon
              className="rounded-circle flex-shrink-6"
              icon={faCheckCircle}
              size="lg"
              color="black"
            />
            <a style={{ color: "white" }} className="m-2">
              Medicine
            </a>
          </h6>
          <h6 className="mt-3" style={{ marginBottom: "10px" }}>
            <FontAwesomeIcon
              className="rounded-circle flex-shrink-6"
              icon={faCheckCircle}
              size="lg"
              color="black"
            />
            <a style={{ color: "white" }} className="m-2">
              Hospitality and Tourism
            </a>
          </h6>
          <h6 className="mt-3" style={{ marginBottom: "10px" }}>
            <FontAwesomeIcon
              className="rounded-circle flex-shrink-6"
              icon={faCheckCircle}
              size="lg"
              color="black"
            />
            <a style={{ color: "white" }} className="m-2">
              Law
            </a>
          </h6>
          <h6 className="mt-3" style={{ marginBottom: "10px" }}>
            <FontAwesomeIcon
              className="rounded-circle flex-shrink-6"
              icon={faCheckCircle}
              size="lg"
              color="black"
            />
            <a style={{ color: "white" }} className="m-2">
              Accounting
            </a>
          </h6>
          <h6 className="mt-3" style={{ marginBottom: "10px" }}>
            <FontAwesomeIcon
              className="rounded-circle flex-shrink-6"
              icon={faCheckCircle}
              size="lg"
              color="black"
            />
            <a style={{ color: "white" }} className="m-2">
              Fashion Design
            </a>
          </h6>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="col-lg-6"
        >
          <Image
            style={{ paddingBottom: "50px", borderRadius: "15px" }}
            src="/popcourse.jpg"
            alt="firstbg"
            className="popular-Course"
            width={300}
            height={400}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
