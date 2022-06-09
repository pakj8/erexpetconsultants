import {
  faCircleCheck,
  faCommentDots,
  faDiagramProject,
  faFaceSmile,
  faHeart,
  faKey,
  faPlaneDeparture,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import ChooseUsCard from "./ChooseUsCard";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function ChooseUs() {
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
  });

  return (
    <motion.div ref={ref} className="row">
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
        Why Choose Us?
      </motion.h3>
      <div className="col-lg-12"></div>
      <div className="col-lg-3 col-sm-1">
        <ChooseUsCard
          className="text-start"
          image="/chat.png"
          title="Expert Guidance"
          text="Our counsellors work very closely with the university partners and legal entities to make sure that you face no problem in the process of application. You come to us with your profile and we take off your career"
        />
      </div>
      <div className="col-lg-3 col-sm-1">
        <ChooseUsCard
          className="text-start"
          image="/check.png"
          title="Trusted Certifications"
          text="We work with the vision of providing the best counselling to students so that your dream becomes achievable. We have the certifications to prove our authenticity which is why we have become the most trusted educational consultants in India."
        />
      </div>
      <div className="col-lg-3 col-sm-1">
        <ChooseUsCard
          className="text-start"
          image="/shield.png"
          title="Reputed Universities"
          text="We open the door to higher education institutions that are suitable for international students which also meet the high standards of education, quality of teaching and higher job prospects once you come to us."
        />
      </div>
      <div className="col-lg-3  col-sm-1">
        <ChooseUsCard
          className="text-start"
          image="/networking.png"
          title="Extensive Networks"
          text="We have extensive networks of students, university partners, legal officers and everything you can think of for getting an admission to your dream university and finally getting a visa."
        />
      </div>
      <div className="col-lg-3  col-sm-1">
        <ChooseUsCard
          className="text-start"
          image="/visa.png"
          title="Student Relations"
          text="Every student is like their own child for each counsellor here. We bond since the first counselling and only deepens along the way even after you reach your study abroad destination."
        />
      </div>
      <div className="col-lg-3 col-sm-1">
        <ChooseUsCard
          className="text-start"
          image="/flowchart.png"
          title="Visa Success Rate"
          text="You might think that getting a university admission means getting a visa is sure. But in our experience, we have seen that getting a visa is equally critical and laborious as getting university admission."
        />
      </div>
      <div className="col-lg-3  col-sm-1">
        <ChooseUsCard
          className="text-start"
          image="/key.png"
          title="Transparent"
          text="When you come to us, you know what is happening with your profile in every step along the way. We work with dignity and full transparency such that you are always informed of every step and always take the right decision."
        />
      </div>
      <div className="col-lg-3 col-sm-1">
        <ChooseUsCard
          className="text-start"
          image="/happy.png"
          title="Happy Customers"
          text="We are happy to announce that we have the highest number of happy customers in the short amount of time of our establishment. If you come to us, we can guarantee you that you will never regret your decision."
        />
      </div>
    </motion.div>
  );
}

export default ChooseUs;
