import React from "react";
import Image from "next/image";
import Link from "next/link";

function NewCard(props) {
  return (
    <div className="img-card col-3 border-dark">
      <h3 className="titleColor cardtitle ">{props.country}</h3>
      <Image
        className="image cardhover countryImage"
        src={props.image}
        width={350}
        height={520}
        alt="immigration"
      />

      <button className="btn btn-secondary cardbtn">Enroll</button>
    </div>
  );
}

export default NewCard;
