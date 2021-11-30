import React, { useState } from "react";
import "./MapWithDescription.css";

import { Map } from "../../atoms/Map/Map";
import { MapButton } from "../../atoms/MapButton/MapButton";
import { MapDetails } from "../../atoms/MapDetails/MapDetails";

import levels from "../../../assets/levels/places.json";

/**
 * Primary UI component for user interaction
 */
export const MapWithDescription = ({ ...props }) => {
  const [selectedPlace, setSelectedPlace] = useState("hotel");

  return (
    <div className="container">
      <Map>
        <MapButton
          isButtonActive={selectedPlace === "hotel"}
          top={"15.38%"}
          left={"32.69%"}
          onClick={() => setSelectedPlace("hotel")}
        />
        <MapButton
          isButtonActive={selectedPlace === "church"}
          top={"28.21%"}
          left={"77.24%"}
          onClick={() => setSelectedPlace("church")}
        />
        <MapButton
          isButtonActive={selectedPlace === "graveyard"}
          top={"83.01%"}
          left={"49.68%"}
          onClick={() => setSelectedPlace("graveyard")}
        />
      </Map>
      <MapDetails
        title={levels[selectedPlace].title}
        content={levels[selectedPlace].description}
        imageName={levels[selectedPlace].image}
        level={levels[selectedPlace].level}
      />
    </div>
  );
};
