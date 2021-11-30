import React from "react";

import MapSvg from "./../../../assets/icons/map.svg";
import "./Map.css";

/**
 * Primary UI component for user interaction
 */
export const Map = ({ ...props }) => {
  return (
    <div {...props} className="map-container">
      <img src={MapSvg} alt="" />
      {props.children}
    </div>
  );
};
