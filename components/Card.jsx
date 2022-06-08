import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ActionAreaCard(props) {
  return (
    <div className="bg-img container">
      <div className="services-card hover-card card border-info">
        <div className="card-info card-body">
          <h4 className="titleColor">
            <FontAwesomeIcon
              className="fontAwesome"
              icon={props.icons}
              size="lg"
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
