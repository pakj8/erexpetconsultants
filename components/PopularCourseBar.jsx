import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function PopularCourseBar(props) {
  return (
    <div style={{ backgroundColor: "#82DBD8" }} className="list-group w-auto">
      <FontAwesomeIcon
        icon={faCheckCircle}
        size="lg"
        className="rounded-circle flex-shrink-6"
      />
      <div className="d-flex gap-2 w-100 ">
        <div>
          <h6 className="mb-0">{props.heading}</h6>
        </div>
      </div>
    </div>
  );
}

export default PopularCourseBar;
