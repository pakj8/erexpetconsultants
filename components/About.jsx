import { useAnimation } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function About() {
  const { ref, inView } = useInView();
  const animations = useAnimation();
  const secondAnimations = useAnimation();
  const thirdAnimations = useAnimation();

  useEffect(() => {
    if (inView) {
      animations.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
        },
      });
    }
    if (!inView) {
      animations.start({
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
      secondAnimations.start({ opacity: 0 });
    }
    if (inView) {
      thirdAnimations.start({
        opacity: 1,
        transition: {
          duration: 1.4,
          delay: 0.1,
        },
      });
    }
    if (!inView) {
      thirdAnimations.start({ opacity: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      style={{
        marginBottom: "2%",
        lineHeight: "1.5",
        backgroundColor: "#417d7a",
        color: "teal",
      }}
      className="row about m-0 p-5 gry-bg"
    >
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
        About Us{" "}
      </motion.h3>

      <motion.div animate={thirdAnimations} className="col-lg-6">
        <Image src="/about2.jpg" width={300} height={350} alt="About-ER" />
      </motion.div>
      <motion.div
        animate={secondAnimations}
        className="col-lg-6 text-start cat d-inline"
      >
        <h2 style={{ color: "#062C30" }} className="">
          <strong>WE DO IT All</strong>
        </h2>
        <h4 style={{ paddingTop: "10px", color: "white" }}>
          We believe that upright guidance and consultation are the first steps
          to starting a career Abroad.
        </h4>
        <p style={{ paddingTop: "10px", color: "white" }}>
          We, ER Expert Consultants LLP is a team of young, highly motivated,
          and efficient team of counsellors waiting to assist you in your dream
          journey to study abroad. Whether you want to study abroad or find
          employment, ER Expert Consultants has the right team of overseas job
          and study abroad consultants in Mumbai (Malad), Punjab (Kotkapura) and
          Gujarat (Ahmedabad) to give you the latest and best advice.
        </p>
      </motion.div>
      <motion.div
        style={{ marginTop: "100px", color: "white" }}
        className="text-start col-lg-6"
      >
        <motion.p animate={secondAnimations}>
          Apart from this, we have various other services that might cater to
          your needs. We have immense experience in counseling students to get a
          successful university admission and visa irrespective of the country.
          We have international exposure and experience to understand your needs
          and provide you with the best counselling.
        </motion.p>
        <motion.p animate={secondAnimations}>
          When you select ER Expert Consultants, you are placing your trust in
          an internationally respected immigration practitioner. Our counsellors
          are highly sought after in the immigration profession and have been
          selected based on the strictest levels of ethics, expertise, and
          proficiency in achieving the best outcomes for your brief.
        </motion.p>
      </motion.div>
      <motion.div
        animate={thirdAnimations}
        style={{ marginTop: "150px" }}
        className="col-lg-6 mt-5"
      >
        <Image src="/about1.jpg" width={300} height={350} alt="About-ER" />
      </motion.div>
    </motion.div>
  );
}

export default About;
