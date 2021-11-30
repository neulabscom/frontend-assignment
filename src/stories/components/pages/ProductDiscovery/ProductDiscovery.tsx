import React from "react";
import "./ProductDiscovery.css";

import { MapWithDescription } from "../../organism/MapWithDescription/MapWithDescription";

/**
 * Primary UI component for user interaction
 */
export const ProductDiscovery = ({ ...props }) => {
  return (
    <div className="page">
      <h1>Scopri i luoghi del mistero</h1>
      <MapWithDescription />
    </div>
  );
};
