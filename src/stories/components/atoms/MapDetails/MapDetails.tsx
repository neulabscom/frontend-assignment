import React, { useEffect } from "react";
import { gsap } from "gsap";

import "./MapDetails.css";

import church from "../../../assets/images/TheChurch.svg";
import graveyard from "../../../assets/images/TheGraveyard.svg";
import hotel from "../../../assets/images/TheHotel.svg";

interface MapDetailProps {
  title: string;
  content: string;
  imageName: string;
  level: string;
}

//animate on content change

export const MapDetails = ({
  title,
  content,
  imageName,
  level,
  ...props
}: MapDetailProps) => {
  useEffect(() => {
    gsap
      .timeline()
      .fromTo(
        ".map-details-container",
        { scaleY: "0" },
        { scaleY: "1", duration: 1 }
      )
      .fromTo(
        ".map-details-box",
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      );
  });

  return (
    <div {...props} className={"map-details-container"}>
      <hr />
      <div className={"map-details-box"}>
        <div>
          <h2 className={"map-details-title"}>{title}</h2>
          <p className={"map-details-content"}>{content}</p>
        </div>
        <div>
          {imageName === "church" && (
            <img className="map-details-image" src={church} alt="church" />
          )}
          {imageName === "graveyard" && (
            <img
              className="map-details-image"
              src={graveyard}
              alt="graveyard"
            />
          )}
          {imageName === "hotel" && (
            <img className="map-details-image" src={hotel} alt="hotel" />
          )}
          <span className={"map-details-level-info"}>{level}</span>
        </div>
      </div>
      <hr />
    </div>
  );
};
