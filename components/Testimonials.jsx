import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

function Testimonials() {
  return (
    <Carousel style={{ backgroundColor: "teal" }} fade>
      <Carousel.Item interval={5000}>
        <Image
          src="/laptop.jpg"
          alt="firstbg"
          style={{ opacity: "1" }}
          width={4460}
          height={2225}
          className="carImage test-image"
        />
        <h1 className="text-start display-1 carousle-title textBorderStyle">
          Testimonials
        </h1>
        <Carousel.Caption>
          <div className="carousel-slide">
            <h3 className="text-start p-10 mt-10 textBorderStyle">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <Image
          src="/laptop.jpg"
          alt="firstbg"
          style={{ opacity: "1" }}
          width={4460}
          height={2225}
          className="carImage test-image"
        />
        <h1 className="text-start display-1 carousle-title textBorderStyle">
          Testimonials
        </h1>
        <Carousel.Caption>
          <div className="carousel-slide">
            <h3 className="text-start p-10 mt-10 textBorderStyle">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there anything embarrassing hidden in the middle
              of text.
            </h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <Image
          src="/laptop.jpg"
          alt="firstbg"
          style={{ opacity: "1" }}
          width={4460}
          height={2225}
          className="carImage test-image"
        />
        <h1 className="text-start display-1 carousle-title textBorderStyle">
          Testimonials
        </h1>
        <Carousel.Caption>
          <div className="carousel-slide">
            <h3 className="text-start p-10 mt-10 textBorderStyle">
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable.
            </h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Testimonials;
