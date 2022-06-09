import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function ActionAreaCard(props) {
  return (
    <div className="bg-img container">
      <div className="services-card hover-card card border-info">
        <div className="card-info card-body">
          <h4 className="titleColor">
            <Image
              src={props.image}
              width={40}
              height={40}
              alt="ER Logo Image"
            />
          </h4>
          <div className="card-body">
            <h4 className="card-text services-text">{props.text}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
