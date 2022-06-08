import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function BottomContainer() {
  return (
    <div className="container m-0 p-5">
      <h3 className="p-5 pb-4 text-start display-4 titleColor">
        <hr
          style={{
            color: "#062C30",
            position: "relative",
            top: "35px",
            width: "60px",
            height: "5px",
          }}
        />
        Yours
        <span className="d-block text-muted h4 p-3 pt-0">
          -----Reliable Partners!.{" "}
        </span>
      </h3>

      <div className="row">
        <div style={{ paddingBottom: "50px" }} className="col-md-6">
          <Image
            className="bottom-img"
            src="/paternship.jpg"
            alt="partner"
            width={300}
            height={370}
          />
        </div>
        <div className="col-md-4 text-start">
          <p style={{ width: "500px", height: "auto" }}>
            Once initial assessment on a specific country is completed, ER
            Expert Consultations provide its clients with a complete breakdown
            of service fees. We offer installment plans and the assurance that
            there are no hidden costs.
          </p>
          <div className="col mt-5">
            <h4>
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="sm"
                className="titleColor"
              />
              <a className="m-2" href="">
                Canada
              </a>
            </h4>
            <h4>
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="sm"
                className="titleColor"
              />
              <a className="m-2" href="">
                Australia
              </a>
            </h4>
            <h4>
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="sm"
                className="titleColor"
              />
              <a className="m-2" href="">
                New York
              </a>
            </h4>
            <h4>
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="sm"
                className="titleColor"
              />
              <a className="m-2" href="">
                USA
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomContainer;
