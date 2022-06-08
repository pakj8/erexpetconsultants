import React, { useEffect } from "react";
import FaqBar from "./FaqBar";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Faq() {
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

  const text = "Asked Question's";

  return (
    <motion.div ref={ref} className="faq-section row">
      <motion.h1
        animate={animations}
        className="p-5 pb-7 text-start display-4 titleColor"
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
        FREQUENTLY <br />{" "}
        <span className="d-block text-muted h4 p-3 pt-0"> Asked Questions</span>
      </motion.h1>
      <div className="col">
        <FaqBar
          question="What are the benefits of studying Abroad?"
          answer="Studying internationally offers a wider variety of courses, some also including research options and skill-based training for students. This helps expand your horizons and opens up a world of new educational opportunities. Not only this, certain programs abroad also allow you to take different courses at the same time."
        />
        <FaqBar
          question="What are advantages of moving abroad?"
          answer="Going abroad will open your mind to how people from other countries perceive the world. You will be able to carry out and market professional services from a completely different perspective. Hiring managers see people who have travelled to different countries as open-minded and capable of thinking 'outside the box'."
        />
        <FaqBar
          question="What is the basic knowledge one needs to have before applying for a visa permit?"
          answer="One needs to be very clear about which category of visa they fall under. Once one knows this they are also able to find out the duration they are allowed to stay and other important details. There are different sets of visa applications which are categorized according to the need of the migrant."
        />
      </div>
    </motion.div>
  );
}

export default Faq;
