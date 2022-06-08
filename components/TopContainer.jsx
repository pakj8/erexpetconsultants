import React, { useState } from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import carouselImage from "../public/slide1.jpg";

function TopContainer() {
  return (
    <Carousel className="carContainer" fade>
      <Carousel.Item interval={20000}>
        {/* <Image
          className="carImage d-block"
          src={carouselImage}
          alt="London Image"
        /> */}
        <div className="firstCarousel"></div>
        <motion.h1
          initial={{ y: "-100vw" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 1, type: "spring" }}
          className="text-start display-1 carousle-title textBorderStyle"
        >
          Welcome
          <span className="blockquote d-block" style={{ fontSize: "40%" }}>
            {" "}
            TO ER EXPERT CONSULTANTS LLP
          </span>
        </motion.h1>

        {/* <h1 className="text-start display-5 blockquote carousle-title textBorderStyle">
            Welcome
          </h1> */}
        <Carousel.Caption>
          <div className="p-5 mt-5 ">
            <h1 className="quote">
              Global Immigration Services and Visa Specialist Since a Decade
            </h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        {/* <img
          style={{ width: "100%", height: "650px" }}
          className="carImage d-block "
          src="/slide2.jpg"
          alt="First slide"
        /> */}
        <div className="secCarousel"></div>
        <h1
          style={{ left: "20%" }}
          className="text-start display-5 carousle-title textBorderStyle ml-10"
        >
          Think Immigration <br /> Think ER
        </h1>
        <Carousel.Caption>
          <div className="p-5 mt-5">
            <h2 className="quote">
              Country of your Choice <br />
            </h2>
            <h2 className="quote">Course of your Choice</h2>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          style={{ width: "100%", height: "650px" }}
          className="carImage d-block "
          src="/slide3.jpg"
          alt="First slide"
        /> */}
        <div className="thirdCarousel"></div>

        <Carousel.Caption>
          <div className="mt-5">
            <h1 style={{ fontSize: "35px" }} className="textBorderStyle">
              Countless Benefits, One Objective-Immigration for All
            </h1>
            <h1 className="quote">Study . Earn . Live</h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default TopContainer;
