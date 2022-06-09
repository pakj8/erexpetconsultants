import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";

function ChooseUsCard(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <motion.div
      transition={{ duration: 1, delay: 10, bounce: 0.4 }}
      onClick={() => setOpen(!isOpen)}
      className="chooseUsCard card border-info"
      style={{
        width: "18rem",
        color: "black",
        borderRadius: "1rem",
        boxShadow: "0px 5px 10px rgba(0,0,0,0.5)",
      }}
    >
      <motion.div
        layout="position"
        style={{ marginTop: "4%" }}
        className="justify-content-center"
      >
        <Image
          src={props.image}
          width={35}
          height={35}
          alt="ER Choose Us Logos"
        />{" "}
      </motion.div>

      <motion.div className="text-center card-body">
        <div className="card-title">
          <motion.h4 layout="position" className="card-title">
            {props.title}
          </motion.h4>{" "}
          {isOpen && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="card-text"
            >
              {props.text}
            </motion.p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ChooseUsCard;
