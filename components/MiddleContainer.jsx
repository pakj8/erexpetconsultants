import React from "react";
import Image from "next/image";

function MiddleContainer() {
  return (
    <div style={{ backgroundColor: "#006E7F" }} className="container m-0 p-5">
      <div className="row">
        <h1 className="p-5 pb-1 text-start display-3 titleColor">
          <hr
            style={{
              color: "#062C30",
              position: "relative",
              top: "35px",
              width: "60px",
              height: "5px",
            }}
          />
          You Deserve{" "}
          <span style={{ color: "black" }} className="d-block  h4 p-3 pt-0">
            {" "}
            ----The Best{" "}
          </span>
        </h1>
        <div className="col-md-6 text-start p-5">
          <p style={{ color: "black" }}>
            <strong>
              Make that decision to pursue your dream of studying abroad now and
              change your life forever. Make that decision to pursue your dream
              of studying abroad now and change your life forever. We believe
              that upright guidance and consultation are the first steps to a
              starting career Abroad. <br />
            </strong>
            <br /> We, ER Expert Consultants.LLP is a team of young, highly
            motivated, and efficient team of counselors waiting to assist you in
            your dream journey to study abroad. Whether you want to study abroad
            or find jobs in Germany, Pingme has the right team of overseas job
            and study abroad consultants in Thrissur, Kerala, to give you the
            latest and best advice. Apart from this, we have various other
            services that might cater to your needs. We have immense experience
            incounselingg students to get a successful university admission and
            visa irrespective of the country. We have international exposure and
            experience to understand your needs and provide you with the best
            counselling. When you select an ER Expert Consultants.LLP, you are
            placing your trust in an internationally respected immigration
            practitioner. Our counselors are highly sought after in the
            migration profession and have been selected based on the strictest
            levels of ethics, expertise, and proficiency in achieving the best
            outcomes for your brief.
          </p>
        </div>
        <div className="col-md-6 text-start">
          <div className="row ">
            <div className="col-4 p-4 mt-5">
              <Image
                src="/cat.jpg"
                alt="firstbg"
                className="cat d-inline"
                width={240}
                height={375}
              />
            </div>
            <div className="col-6 m-2 ">
              <Image
                src="/paternship.jpg"
                alt="firstbg"
                className="cat d-inline"
                width={265}
                height={388}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleContainer;
