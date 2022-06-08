import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function ServicesCard(props) {
  return (
    <div className="bg-img container">
      <div className="services-card otherServicesCard hover-card card border-info">
        <div>
          <h4 className="titleColor">
            <FontAwesomeIcon icon={faCheckCircle} size="lg" />
          </h4>
          <div className="card-body">
            <h4 className="card-text services-text">{props.text}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
